import taskflowImage from "../assets/taskflow.png";
import excelFlowImage from "../assets/excelflow.png";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-950 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-lg mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I have built using modern
            web technologies and real-world application workflows.
          </p>
        </div>


        {/* =====================================================
            PROJECT 1 — TASKFLOW
        ====================================================== */}

        <div className="max-w-4xl mx-auto mb-16">

          {/* TaskFlow Screenshot */}
          <div className="border border-gray-700 rounded-t-2xl overflow-hidden">
            <img
              src={taskflowImage}
              alt="TaskFlow Dashboard"
              className="w-full h-auto block"
            />
          </div>

          {/* TaskFlow Details */}
          <div className="bg-gray-900 border border-gray-700 border-t-0 rounded-b-2xl overflow-hidden shadow-2xl hover:border-blue-500/50 transition">

            <div className="p-6 md:p-8">

              {/* Project Header */}
              <div className="mb-6">
                <p className="text-blue-400 text-sm font-medium mb-2">
                  Full-Stack MERN Project
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  TaskFlow — Task Management System
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                TaskFlow is a full-stack task management application
                that allows users to register and log in, create and
                manage tasks, set priorities and deadlines, track task
                completion, and manage their work through a responsive
                dashboard.
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">
                  Key Features
                </h4>

                <div className="grid sm:grid-cols-2 gap-2 text-gray-400 text-sm">
                  <p>✓ User Registration & Login</p>
                  <p>✓ JWT Authentication</p>
                  <p>✓ Task Creation & Management</p>
                  <p>✓ Task Priority & Deadlines</p>
                  <p>✓ Completion Tracking</p>
                  <p>✓ Notifications & Reminders</p>
                  <p>✓ Profile Management</p>
                  <p>✓ Responsive Design</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    React.js
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Tailwind CSS
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Node.js
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Express.js
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    MongoDB
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    JWT
                  </span>

                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

               <a
                  href="https://taskflow-myworkmanager.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
                >
                  Live Demo
                </a>

              <a
                  href="https://github.com/Aashi48Singh/Taskflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 border border-gray-600 hover:bg-white hover:text-black text-white rounded-lg transition font-medium"
                >
                  View on GitHub
                </a>

              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            PROJECT 2 — EXCELFLOW
        ====================================================== */}

        <div className="max-w-4xl mx-auto">

          {/* ExcelFlow Screenshot */}
          <div className="border border-gray-700 rounded-t-2xl overflow-hidden">

            <img
              src={excelFlowImage}
              alt="ExcelFlow Dashboard"
              className="w-full h-auto block"
            />

          </div>

          {/* ExcelFlow Details */}
          <div className="bg-gray-900 border border-gray-700 border-t-0 rounded-b-2xl overflow-hidden shadow-2xl hover:border-green-500/50 transition">

            <div className="p-6 md:p-8">

              {/* Project Header */}
              <div className="mb-6">

                <p className="text-green-400 text-sm font-medium mb-2">
                  Full-Stack MERN + Excel Automation
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  ExcelFlow — Excel Automation Workspace
                </h3>

              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                ExcelFlow is a full-stack spreadsheet automation platform
                designed to reduce repetitive Excel work. Users can upload
                Excel and CSV files, manage spreadsheet data, clean and
                validate records, perform automated calculations, create
                automation workflows, generate reports, view history, and
                export processed files.
              </p>

              {/* Features */}
              <div className="mb-6">

                <h4 className="text-white font-semibold mb-3">
                  Key Features
                </h4>

                <div className="grid sm:grid-cols-2 gap-2 text-gray-400 text-sm">

                  <p>✓ User Registration & Login</p>
                  <p>✓ JWT Authentication</p>

                  <p>✓ Excel & CSV Upload</p>
                  <p>✓ Spreadsheet Data Management</p>

                  <p>✓ Add, Edit & Delete Data</p>
                  <p>✓ Data Cleaning & Validation</p>

                  <p>✓ Automated Calculations</p>
                  <p>✓ Command-Based Excel Operations</p>

                  <p>✓ Automation Workflows</p>
                  <p>✓ Reports & History</p>

                  <p>✓ Excel Export</p>
                  <p>✓ Responsive Dashboard</p>

                </div>

              </div>

              {/* Technologies */}
              <div className="mb-8">

                <h4 className="text-white font-semibold mb-3">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    React.js
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Tailwind CSS
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Node.js
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Express.js
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    MongoDB
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    JWT
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Axios
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    XLSX
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Vercel
                  </span>

                  <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300">
                    Render
                  </span>

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

                <a
                  href="https://excel-flow-automation.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/Aashi48Singh/ExcelFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 border border-gray-600 hover:bg-white hover:text-black text-white rounded-lg transition font-medium"
                >
                  View on GitHub
                </a>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;