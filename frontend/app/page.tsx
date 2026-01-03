import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Production-Ready Web Application
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A modern full-stack web application built with Next.js, Node.js,
          Docker, and CI/CD best practices.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="#features"
            className="px-6 py-3 bg-black text-white rounded-md"
          >
            View Features
          </Link>
          <Link
            href="#"
            className="px-6 py-3 border rounded-md"
          >
            Documentation
          </Link>
        </div>
      </div>

      <div id="features" className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Frontend</h3>
          <p className="text-gray-600">
            Built using Next.js App Router with clean layout, loading states,
            and scalable architecture.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Backend</h3>
          <p className="text-gray-600">
            Node.js and Express backend designed for REST APIs, authentication,
            and service-based architecture.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">DevOps</h3>
          <p className="text-gray-600">
            Dockerized services, Jenkins pipelines, and environment-based
            deployments following real-world DevOps workflows.
          </p>
        </div>
      </div>

      <div className="text-center pt-10 border-t">
        <p className="text-gray-600">
          Designed and built with production standards in mind.
        </p>
      </div>
    </section>
  );
}
