//  About Page
export default function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-30 animate-blob"></div>
      <div className="px-4 py-12 max-w-2xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">About</h1>
        <p className="mb-4 text-slate-700">
          I am Shubham Pal, a third year undergrad student at IIIT-D. I have gained proficiency in programming languages like C++, Python, Java, as well as web technologies such as HTML, CSS, and SQL. I am also learning JavaScript, ReactJS and NodeJS along with using MongoDB. My coursework in Data Structures and Algorithms, Database Management Systems, and Object-Oriented Programming has helped me with the necessary skills to effectively address Full stack development challenges. I am well-versed in using tools and technologies such as Git/GitHub, Linux, Miro and Figma which enhance my ability to collaborate effectively and deliver high-quality solutions.

        </p>
        <p className="mb-4 text-slate-700">
          I have completed various projects that have enhanced my skills. Notably, I created a Milk Distributor Database Management. It is a database management system for a milk store that manages the supply of milk from production to delivering the customer. Using MySQL, Python and SQL relations and a front-end interface using HTML, CSS. Moreover, my experience with the LibGDX library in Java has provided me with valuable insights into game development, which can be applied to developing interactive web applications.
        </p>
      </div>
    </div>
  );
}