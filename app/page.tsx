import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      {/* Section for introduction text */}
      <div className="text-center mb-12 max-w-2xl">
        <p className="text-lg font-semibold">
          Kiddo Motivate is an app designed to inspire and motivate children. Lack of motivation during childhood can lead to emotional challenges and potential trauma in later life. Our mission is to prevent this by nurturing positivity and growth in children from an early age.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex items-center bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Text on the left */}
        <div className="flex-1 pr-8">
          <h2 className="text-2xl font-bold mb-4">Empowering the Future</h2>
          <p className="text-md">
            Children are the future of society, and it's our responsibility to nurture, motivate, and support them. By providing the right environment and encouragement, we ensure they grow into healthy, confident adults. At Kiddo Motivate, we believe every child deserves the opportunity to thrive.
          </p>
        </div>

        {/* Image on the right */}
        <div className="flex-shrink-0">
          <Image
            src="/images/kiddo_motivate_home.jpeg"
            alt="Kids being motivated"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <h3 className="font-bold text-2xl">Product Showcase</h3>
      </div>

      {/* Product Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Sign In Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Sign In</h4>
              <p className="text-md">
                Access your account and get started with motivating your kids.
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <Image
                src="/images/sign.jpeg"
                alt="Sign In"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Register Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Register</h4>
              <p className="text-md">
                Create a new account to start motivating and tracking your child's progress.
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <Image
                src="/images/signup.jpeg"
                alt="Register"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Home Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center">
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-2">Home</h4>
              <p className="text-md">
                Explore the features and tools available to help motivate and inspire children.
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <Image
                src="/images/product_homepage.jpeg"
                alt="Home"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
