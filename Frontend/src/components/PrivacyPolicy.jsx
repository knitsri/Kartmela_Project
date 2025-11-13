function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-800 to-red-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-pink-200">
            How we protect and use your information
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Privacy Matters</h2>
            
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Information We Collect</h3>
                <p>We collect basic information to provide you with the best shopping experience:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Name and contact details for order processing</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (securely processed)</li>
                  <li>Order history and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Process your orders and payments</li>
                  <li>Deliver your purchases</li>
                  <li>Provide customer support</li>
                  <li>Improve our services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Protection</h3>
                <p>We implement security measures to protect your personal information and use secure payment gateways for all transactions.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
                <p>For privacy-related questions, contact us at <span className="text-pink-600">privacy@kartmela.com</span></p>
              </div>

              <div className="text-sm text-gray-500 border-t pt-4">
                <p>Last updated: March 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;