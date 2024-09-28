import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="bg-black py-12">
      <div id='Education' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Education</h2>

        {/* Split into two parts: School and College */}
        <div className="flex flex-col lg:flex-row justify-between mt-20  space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* School Education on the left */}
          <div className="bg-black shadow-lg rounded-lg p-6 w-full border-4	 lg:w-1/2">
            <div className="flex items-center">
              <FaGraduationCap className="text-4xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">High School</h3>
                <a href='https://www.jcsbiaora.co.in/about_school.php' className="text-white">Jyoti Convent Senior Secondary School, Biaora</a>
                <p className="text-white">Completed: 2021</p>
              </div>
            </div>
            <ul className="mt-4 text-gray-400">
              <li>- Stream: Science </li>
              <li>- Board: CBSE</li>
              <li>-10th Percentage: 83% (2019)</li>
              <li>-12th Percentage: 82% (2021)</li>
            </ul>
          </div>

          {/* College Education on the right */}
          <div className="bg-black shadow-lg rounded-lg border-4	 p-6 w-full lg:w-1/2">
            <div className="flex items-center">
              <FaGraduationCap className="text-4xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">B.Tech in Information Technology</h3>
                <p className="text-white">Acropolis Institute Of Technology And Research - AITR, Indore
                </p>
                <p className="text-white">August 2021 - 2025</p>
              </div>
            </div>
            <ul className="mt-4 text-gray-400">
              <li>- Specialized in Web Development and MERN Stack</li>
              <li>- Capstone Project: Thrift Store for Eduction material, Using MERN</li>
              <li>- Current Semester: 7th </li>
              <li>- GGPA: 7.00 </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
