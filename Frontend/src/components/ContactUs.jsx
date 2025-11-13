import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-800 to-red-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-pink-200">
            Get in touch with our team
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">support@kartmela.com</p>
                  <p className="text-gray-600">sales@kartmela.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1-800-KARTMELA</p>
                  <p className="text-gray-600">+1-555-HELP-NOW</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Office Address</h3>
                  <p className="text-gray-600">
                    123 Shopping Street<br />
                    Retail City, RC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Support Hours</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Customer Support</h3>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM EST</p>
                  <p className="text-gray-600">Saturday: 10AM - 4PM EST</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Response Time</h3>
                  <p className="text-gray-600">Email: Within 24 hours</p>
                  <p className="text-gray-600">Phone: Immediate during hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg border border-pink-200">
          <h3 className="font-semibold text-gray-800 mb-2">We're here to help!</h3>
          <p className="text-gray-600">
            Our team is dedicated to providing you with the best shopping experience. 
            Don't hesitate to reach out with any questions or concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;