import React, { useState } from 'react';
import { 
  Activity, 
  Microscope, 
  Heart, 
  Eye, 
  Zap, 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  CheckCircle,
  Users,
  Award,
  Calendar,
  Stethoscope,
  TestTube,
  Brain,
  Droplets,
  Star,
  FileText,
  Beaker,
  Target,
  Globe,
  Monitor,
  Cloud,
  Home
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: TestTube,
      title: "Clinical Biochemistry",
      description: "Complete metabolic panels, liver function tests, kidney function tests, cardiac markers, and diabetes screening",
      features: ["Liver Function Tests", "Kidney Function Tests", "Lipid Profile", "Cardiac Markers", "HbA1c", "Glucose Tolerance Test"]
    },
    {
      icon: Microscope,
      title: "Hematology",
      description: "Complete blood count, coagulation studies, ESR, and specialized hematological investigations",
      features: ["Complete Blood Count", "ESR", "Coagulation Profile", "Peripheral Smear", "Reticulocyte Count", "Platelet Function"]
    },
    {
      icon: Shield,
      title: "Microbiology",
      description: "Culture and sensitivity testing, antimicrobial susceptibility testing for various clinical specimens",
      features: ["Blood Culture", "Urine Culture", "Stool Culture", "Sputum Culture", "Wound Swab", "Antimicrobial Sensitivity"]
    },
    {
      icon: Brain,
      title: "Histopathology",
      description: "Tissue examination, biopsy analysis, cytological studies, and immunohistochemistry services",
      features: ["Tissue Biopsy", "Fine Needle Aspiration", "Pap Smear", "Frozen Section", "Immunohistochemistry", "Special Stains"]
    },
    {
      icon: Droplets,
      title: "Serology & Immunology",
      description: "Infectious disease markers, autoimmune panels, tumor markers, and allergy testing",
      features: ["Hepatitis Panel", "HIV Testing", "Thyroid Function", "Tumor Markers", "Autoimmune Profile", "Allergy Panel"]
    },
    {
      icon: Heart,
      title: "Molecular Diagnostics",
      description: "PCR testing, genetic analysis, viral load testing, and molecular pathology services",
      features: ["RT-PCR", "Genetic Testing", "Viral Load", "COVID-19 Testing", "TB-PCR", "HPV Testing"]
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO 15189:2012 certified ensuring international quality standards"
    },
    {
      icon: Clock,
      title: "Quick Reports",
      description: "Same day reports for routine tests with fast turnaround times"
    },
    {
      icon: Users,
      title: "Expert Pathologists",
      description: "Qualified MD pathologists and experienced laboratory technicians"
    },
    {
      icon: Target,
      title: "Accurate Results",
      description: "State-of-the-art equipment with stringent quality control measures"
    }
  ];

  const healthPackages = [
    {
      name: "Basic Health Checkup",
      price: "₹1,500",
      tests: "25 Tests",
      features: ["Complete Blood Count", "Lipid Profile", "Liver Function", "Kidney Function", "Diabetes Screening"]
    },
    {
      name: "Comprehensive Health Checkup",
      price: "₹3,500",
      tests: "50 Tests",
      features: ["All Basic Tests", "Thyroid Profile", "Cardiac Markers", "Tumor Markers", "Vitamin Profile"]
    },
    {
      name: "Executive Health Checkup",
      price: "₹6,500",
      tests: "75 Tests",
      features: ["All Comprehensive Tests", "Advanced Cardiac Profile", "Cancer Screening", "Hormonal Analysis", "Consultation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              {/* Exact AditYa Laboratory Logo */}
              <div className="mr-4">
                <img 
                  src="/image.png" 
                  alt="Aditya Laboratory Logo" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</a>
              <a href="#packages" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Health Packages</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                Book Test
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</a>
                <a href="#packages" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Health Packages</a>
                <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium w-fit">
                  Book Test
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Quality Assured Laboratory
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Trusted Diagnostics,
                  <span className="text-orange-600"> Accurate Results</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Leading diagnostic laboratory in Kolhapur providing comprehensive pathology services 
                  with state-of-the-art technology and expert medical professionals since 1989.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">35+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-600">Tests Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/image copy.png" 
                  alt="Aditya Laboratory - Professional laboratory technician working with microscope" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-orange-100">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900">ISO 15189:2012</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-orange-100">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Same Day</div>
                    <div className="text-sm text-gray-600">Quick Reports</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Laboratory Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive diagnostic services with advanced technology and expert pathologists 
              ensuring accurate and timely results for all your healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 group hover:-translate-y-2">
                <div className="mb-6">
                  <div className="bg-orange-100 rounded-full p-3 w-fit group-hover:bg-orange-200 transition-colors">
                    <service.icon className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-orange-50 text-orange-600 py-3 rounded-lg hover:bg-orange-100 transition-colors font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Check-up Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive health screening packages designed for different age groups and health requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${index === 1 ? 'border-orange-200 transform scale-105' : 'border-gray-100'} group hover:-translate-y-2`}>
                {index === 1 && (
                  <div className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.tests}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${index === 1 ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-orange-50 text-orange-600 hover:bg-orange-100'}`}>
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Aditya Laboratory?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience excellence in diagnostic healthcare with our commitment to quality, accuracy, and patient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-orange-100">
                  <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              Experience 35 years of excellence in diagnostics and let us be your partner in health. Your health, our priority — always.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Our Legacy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-lg p-3 mr-4">
                  <Monitor className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Legacy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our journey began with a vision to provide accurate, reliable, and timely diagnostic services to ensure the best 
                health outcomes for our patients. Over the decades, we have grown and evolved, embracing technological 
                advancements while maintaining the highest standards of medical ethics and patient care.
              </p>
            </div>

            {/* Our Expertise */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-lg p-3 mr-4">
                  <Cloud className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Expertise</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With a team of highly qualified pathologists, experienced technicians, and a compassionate support staff, we deliver 
                a wide range of diagnostic services, including clinical pathology, biochemistry, microbiology, and preventive 
                health checkups. Our commitment to excellence has established us as a leader in the diagnostic field, known 
                for precision and personalized care.
              </p>
            </div>

            {/* Our Dedication */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-lg p-3 mr-4">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Dedication</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We are dedicated to guiding patients through their health journeys with clear, thorough results and actionable 
                insights. Our state-of-the-art equipment and advanced methodologies ensure that each test result is accurate and 
                dependable. We continuously strive to improve and innovate, keeping patient well-being at the heart of 
                everything we do.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">35+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Diagnostic Tests</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Aditya Laboratory</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for appointments, queries, or any assistance. We're here to serve your diagnostic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-lg p-3 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Aditya Laboratory</h4>
                      <p className="text-gray-600">1126/E 1st Floor Thakur Complex,</p>
                      <p className="text-gray-600">Shahid Major Satyajit Shinde Marg, Shahupuri,</p>
                      <p className="text-gray-600">Kolhapur - 416001</p>
                      <p className="text-gray-600 text-sm mt-1">(Opposite Railway Gate No 1 Near Indusland Bank Sykes Extension)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                      <p className="text-gray-600">+91 231 2471234</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@aditya-lab.com</p>
                      <p className="text-gray-600">reports@aditya-lab.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                      <p className="text-gray-600">Monday - Saturday: 7:00 AM - 9:00 PM</p>
                      <p className="text-gray-600">Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-4">
                  <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Test
                  </button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              
              <div className="relative h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8234567890123!2d74.2436!3d16.7050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000d74d6c555%3A0x89f8c7ce9676543d!2sShahid%20Major%20Satyajit%20Shinde%20Marg%2C%20Shahupuri%2C%20Kolhapur%2C%20Maharashtra%20416001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aditya Laboratory Location"
                ></iframe>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">1126/E 1st Floor Thakur Complex</p>
                    <p className="text-sm text-gray-600">Shahid Major Satyajit Shinde Marg, Shahupuri, Kolhapur - 416001</p>
                    <p className="text-xs text-gray-500 mt-1">(Opposite Railway Gate No 1 Near Indusland Bank Sykes Extension)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="/image.png" 
                  alt="Aditya Laboratory Logo" 
                  className="h-10 w-auto mr-3 filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted diagnostic partner in Kolhapur, committed to accuracy, quality, and exceptional patient care since 1989.
              </p>
              <div className="text-sm text-gray-400">
                <p>Quality Assured Laboratory</p>
                <p>ISO 15189:2012 Certified</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#packages" className="hover:text-white transition-colors">Health Packages</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Clinical Biochemistry</li>
                <li>Hematology</li>
                <li>Microbiology</li>
                <li>Histopathology</li>
                <li>Molecular Diagnostics</li>
                <li>Health Check-ups</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+91 231 2471234</li>
                <li>info@aditya-lab.com</li>
                <li>1126/E Thakur Complex</li>
                <li>Shahupuri, Kolhapur - 416001</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aditya Laboratory. All rights reserved. | Quality Assured Diagnostic Laboratory</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;