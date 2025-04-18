"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { useForm } from "react-hook-form"
import diabetes from "@/public/services/image/diab.png"
import DiabetesCareInfo from './DiabetesCareInfo';
import DiabetesWellnessApproach from './DiabetesWellnessApproach';
import SpecialistsSlider from './SpecialistsSlider';

type FormData = {
  age: string
  hasRelativeWithDiabetes: string
  sex: string
  physicalActivity: string
  bmi: string
  hypertension: string
}

const DiabetesWellnessCheck = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 6

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      age: "",
      hasRelativeWithDiabetes: "no",
      sex: "",
      physicalActivity: "no",
      bmi: "",
      hypertension: "no"
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data)
    // Calculate diabetes risk score
    let score = 0;
    
    // Basic scoring based on form inputs
    if (data.hasRelativeWithDiabetes === "yes") score += 1;
    if (data.physicalActivity === "no") score += 1;
    if (data.hypertension === "yes") score += 1;
    
    // BMI scoring
    if (data.bmi === ">40") {
      score += 3;
    } else if (data.bmi === "30-40") {
      score += 2;
    } else if (data.bmi === "25-30") {
      score += 1;
    }
    
    console.log("Diabetes risk score:", score);
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    // Reset form to default values
    reset({
      age: "",
      hasRelativeWithDiabetes: "no",
      sex: "",
      physicalActivity: "no",
      bmi: "",
      hypertension: "no"
    });
    // Go back to step 1
    setCurrentStep(1);
  }

  return (

<>

    <div className="w-full py-[120px]">
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-12 gap-8">
          {/* Progress Box - 7 columns */}
          <div className=" w-full md:col-span-7">
            <div className="justify-start text-[#20254b] text-[40px] font-medium leading-[50.40px] mb-6">
              Are you at risk of developing diabetes?
            </div>
            
            <div className="w-full p-6 bg-white rounded-2xl outline-1 outline-offset-[-1px] outline-[#e9e9ea] flex flex-col justify-start items-center gap-6">
              {/* Progress Section */}
              <div className="w-full flex flex-col justify-start items-start gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-2xl">😊</span>
                  </div>
                  <span className="text-xl text-[#030304]">Following the steps</span>
                </div>

                {/* Progress Steps */}
                <div className="w-full relative flex justify-between items-center">
                  {/* Background line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#f5faeb] transform -translate-y-1/2"></div>
                  
                  {/* Progress line */}
                  <div
                    className="absolute top-1/2 left-0 h-0.5 bg-[#8cc640] transform -translate-y-1/2 transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                  ></div>

                  {Array.from({ length: totalSteps }, (_, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-center rounded-full w-8 h-8 text-sm font-medium relative
                        ${i + 1 <= currentStep ? "bg-[#8cc640] text-white" : "bg-[#f5faeb] text-[#1d1f2c]"}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="w-full flex flex-col justify-start items-end gap-8">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  {currentStep === 1 && (
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                      <h2 className="w-full text-center text-2xl font-medium text-[#1d1f2c]">
                        Type your Age
                      </h2>
                      <div className="w-full max-w-[404px]">
                        <input
                          type="number"
                          placeholder="Enter your age"
                          {...register("age", { required: true, min: 1, max: 120 })}
                          className="w-full h-12 px-4 bg-[#f6f8fa] rounded-xl text-[#4a4c56] text-base"
                        />
                        {errors.age && (
                          <p className="text-red-500 text-sm mt-1">Please enter a valid age</p>
                        )}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                      <h2 className="w-full text-center text-2xl font-medium text-[#1d1f2c]">
                        Sex
                      </h2>
                      <div className="w-full max-w-[404px] flex justify-center gap-12">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="female"
                            {...register("sex", { required: true })}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("sex") === "female" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>Female</span>
                        </label>

                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="male"
                            {...register("sex", { required: true })}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("sex") === "male" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>Male</span>
                        </label>
                      </div>
                      {errors.sex && (
                        <p className="text-red-500 text-sm mt-1">Please select your sex</p>
                      )}
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                      <h2 className="w-full text-center text-2xl font-medium text-[#1d1f2c]">
                        1st degree relative with diabetes
                      </h2>
                      <div className="w-full max-w-[404px] flex justify-center gap-12">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="yes"
                            {...register("hasRelativeWithDiabetes")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("hasRelativeWithDiabetes") === "yes" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>Yes</span>
                        </label>

                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="no"
                            {...register("hasRelativeWithDiabetes")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("hasRelativeWithDiabetes") === "no" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                      <h2 className="w-full text-center text-2xl font-medium text-[#1d1f2c]">
                        Do you engage in any physical activity?
                      </h2>
                      <div className="w-full max-w-[404px] flex justify-center gap-12">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="yes"
                            {...register("physicalActivity")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("physicalActivity") === "yes" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>Yes</span>
                        </label>

                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="no"
                            {...register("physicalActivity")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("physicalActivity") === "no" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                      <h2 className="w-full text-center text-2xl font-medium text-[#1d1f2c]">
                        BMI
                      </h2>
                      <div className="w-full max-w-[404px] flex flex-wrap justify-center gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="<25"
                            {...register("bmi", { required: true })}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("bmi") === "<25" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>&lt;25</span>
                        </label>

                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="25-30"
                            {...register("bmi")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("bmi") === "25-30" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>25-30</span>
                        </label>

                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="30-40"
                            {...register("bmi")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("bmi") === "30-40" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>30-40</span>
                        </label>

                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value=">40"
                            {...register("bmi")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("bmi") === ">40" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>&gt;40</span>
                        </label>
                      </div>
                      {errors.bmi && (
                        <p className="text-red-500 text-sm mt-1">Please select your BMI range</p>
                      )}
                    </div>
                  )}

                  {currentStep === 6 && (
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                      <h2 className="w-full text-center text-2xl font-medium text-[#1d1f2c]">
                        Hypertension previous diagnosis (BP 140/90)
                      </h2>
                      <div className="w-full max-w-[404px] flex justify-center gap-12">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="yes"
                            {...register("hypertension")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("hypertension") === "yes" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>Yes</span>
                        </label>

                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="no"
                            {...register("hypertension")}
                            className="sr-only"
                          />
                          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                            {watch("hypertension") === "no" && (
                              <div className="w-3 h-3 rounded-full bg-[#8cc640]"></div>
                            )}
                          </div>
                          <span>No</span>
                        </label>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-medium mb-2">Score: {
                          (watch("hasRelativeWithDiabetes") === "yes" ? 1 : 0) +
                          (watch("physicalActivity") === "no" ? 1 : 0) +
                          (watch("hypertension") === "yes" ? 1 : 0) +
                          (watch("bmi") === ">40" ? 3 : watch("bmi") === "30-40" ? 2 : watch("bmi") === "25-30" ? 1 : 0)
                        }</h3>
                        <p className="text-sm text-gray-600">
                          If you score 5 or more you are at an increased risk of diabetes. However, only your doctor can know for sure if you have diabetes or not. If you have concerns at all, please speak with a healthcare provider higher than normal.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="w-full flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      className={`h-12 px-8 py-2.5 rounded-xl bg-[#f6f8fa] text-[#4a4c56] ${
                        currentStep === 1 ? "invisible" : ""
                      }`}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={currentStep === totalSteps ? handleReset : handleNext}
                      className="h-12 px-8 py-2.5 bg-[#8cc640] text-white rounded-xl hover:bg-[#7ab530] transition-colors"
                    >
                      {currentStep === totalSteps ? "Restart" : "Next Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Image - 5 columns */}
          <div className=" w-full h-80 md:h-full md:col-span-5">
            <div className="w-full h-full relative rounded-lg overflow-hidden mt-8 md:mt-0">
              <Image
                src={diabetes}
                alt="Doctor holding glucose meter"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Import DiabetesCareInfo component */}
        <DiabetesCareInfo />
        
        {/* Import DiabetesWellnessApproach component */}
        <div className="mt-20">
          <DiabetesWellnessApproach />
        </div>
        
        {/* Import SpecialistsSlider component */}
        <div className="mt-20">
          <SpecialistsSlider />
        </div>
      </div>
    </div>

</>


  );
};

export default DiabetesWellnessCheck; 