function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-800 to-red-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-pink-200">
            Guidelines for using KartMela
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms & Conditions</h2>
            
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Registration</h3>
                <p>By creating an account, you agree to provide accurate information and maintain account security.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Orders & Payments</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>All orders are subject to product availability</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Payment must be completed for order processing</li>
                  <li>We accept major credit cards and digital payments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Shipping & Returns</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Shipping times are estimates and may vary</li>
                  <li>Return policy: 30 days from delivery date</li>
                  <li>Products must be in original condition for returns</li>
                  <li>Shipping costs for returns may apply</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Prohibited Activities</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Creating multiple accounts for abuse</li>
                  <li>Attempting to circumvent security measures</li>
                  <li>Placing fraudulent orders</li>
                  <li>Misusing promotional offers</li>
                </ul>
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

export default TermsOfService;