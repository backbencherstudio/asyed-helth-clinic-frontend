"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "emailjs-com"
import { Award, CheckCircle, Clock, DollarSign, Heart, MapPin, Target, Upload, Users } from "lucide-react"
import { useState } from "react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
    coverLetter: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare emailjs params
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      coverLetter: formData.coverLetter,
    };

    // Send email using emailjs (replace with your own serviceId, templateId, userId)
    try {
      await emailjs.send(
        "your_service_id", // replace with your EmailJS service ID
        "your_template_id", // replace with your EmailJS template ID
        templateParams,
        "your_user_id" // replace with your EmailJS public key (user ID)
      );
      alert("Application submitted and email sent successfully!");
    } catch (error) {
      alert("Failed to send email. Please try again.");
      console.error(error);
    }
    setIsSubmitting(false);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
      coverLetter: "",
    });
  }

  const currentOpenings = [
    {
      title: "Medical Assistants (MA)",
      type: "Full-time",
      location: "Multiple Locations",
      salary: "$35,000 - $45,000",
      description: "Support healthcare providers with patient care and administrative tasks.",
    },
    {
      title: "Nurse Practitioners (NP)",
      type: "Full-time",
      location: "Main Clinic",
      salary: "$85,000 - $110,000",
      description: "Provide comprehensive healthcare services and patient management.",
    },
    {
      title: "Front Desk Receptionists",
      type: "Part-time/Full-time",
      location: "Various Locations",
      salary: "$28,000 - $35,000",
      description: "Manage patient scheduling, insurance verification, and front office operations.",
    },
    {
      title: "Clinic Managers",
      type: "Full-time",
      location: "Regional Clinics",
      salary: "$55,000 - $70,000",
      description: "Oversee daily clinic operations and staff management.",
    },
    {
      title: "Telehealth Coordinators",
      type: "Full-time",
      location: "Remote/Hybrid",
      salary: "$40,000 - $50,000",
      description: "Coordinate virtual healthcare services and patient communications.",
    },
  ]

  const requirements = [
    "Patient focused and compassionate",
    "Punctual, professional, and reliable",
    "Skilled in multitasking and staying calm under pressure",
    "Adaptable and eager to learn in a fast-paced healthcare setting",
    "Committed to upholding ethical and clinical standards",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-bgthirdColor text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-PrimaryColor">Join Our Team. Make a Difference.</h1>
          <p className="text-xl text-headerColor leading-relaxed max-w-3xl mx-auto">
            At North Ave Immediate Care, we're more than a medical clinic — we're a team of professionals committed to
            delivering compassionate, efficient, and high-quality care every day. If you're passionate about healthcare
            and looking for a workplace that values growth, teamwork, and making a real impact, we'd love to hear from
            you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Why Work With Us */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-xl">Professional Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work alongside experienced medical providers and support staff who are committed to clinical quality
                  and continual improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-xl">Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in teamwork. Every member of our staff plays an essential role in ensuring our clinic runs
                  smoothly and our patients receive timely, respectful care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-xl">Room to Grow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Whether you're a seasoned assistant and seeking out of a seasoned healthcare provider, we encourage
                  professional growth with training, support, and advancement opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <CardTitle className="text-xl">A Mission That Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're proud to offer services that improve lives—from everyday illnesses and injuries to chronic
                  condition management and preventive care.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Look For */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What We Look For</h2>
          <Card className=" mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">We welcome applications from individuals who are:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Openings */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Current Openings</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking to grow our team. We regularly hire for the following roles:
          </p>
          <div className="grid gap-6">
            {currentOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-PrimaryColor">{job.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">{job.description}</CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                        <Clock className="w-3 h-3 mr-1" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        <MapPin className="w-3 h-3 mr-1" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
            <p className="text-gray-700">
              <strong>Don't see a role that fits?</strong> We encourage you to submit your resume anyway. We're always
              open to connecting with great people.
            </p>
          </div>
        </section>

        {/* How to Apply */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">How to Apply</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Fill out the form below and upload your resume. Our team will review your application and follow up with
            next steps.
          </p>

          {/* Application Form */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Application Form</CardTitle>
              <CardDescription className="text-center">Please fill out all required fields below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                      placeholder="Enter your full name"
                      className="!h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="!h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      placeholder="Enter your phone number"
                      className="!h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest *</Label>
                    <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                      <SelectTrigger className="w-full !h-12">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical-assistant">Medical Assistant (MA)</SelectItem>
                        <SelectItem value="nurse-practitioner">Nurse Practitioner (NP)</SelectItem>
                        <SelectItem value="front-desk">Front Desk Receptionist</SelectItem>
                        <SelectItem value="clinic-manager">Clinic Manager</SelectItem>
                        <SelectItem value="telehealth-coordinator">Telehealth Coordinator</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume Upload *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                    <Input
                      id="resume"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      required

                    />
                    <Label htmlFor="resume" className="cursor-pointer justify-center text-center w-full">
                      {formData.resume ? (
                        <span className="text-green-600 font-medium">{formData.resume.name}</span>
                      ) : (
                        <p className="text-gray-600 flex justify-center text-center">Click to upload your resume (PDF, DOC, DOCX)</p>
                      )}
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Tell Us Why You'd Be a Great Fit</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    placeholder="Share your experience, passion for healthcare, and what makes you a great candidate..."
                    rows={5}
                    className="!h-40"
                  />
                </div>


                <div className="flex justify-end ">
                  <button
                    type="submit"
                    className=" bg-PrimaryColor hover:shadow-xl transition-all cursor-pointer  text-white py-3 px-6 rounded-md text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </button>
                </div>

              </form>
            </CardContent>
          </Card>
        </section>

        {/* Closing Note */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-6 lg:p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            We're excited to grow our team with individuals who share our values of empathy, quality, and dedication. At
            North Ave Immediate Care, every role matters — and every team member helps shape the care we deliver. We
            look forward to hearing from you.
          </p>
        </section>
      </div>
    </div>
  )
}
