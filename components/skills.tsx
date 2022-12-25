import { Fragment, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Skills = () => {
  const divVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Fragment>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={divVariants}
      >
        <div className="ml-2 text-3xl font-bold mb-4">My Skills</div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </motion.div>
    </Fragment>
  );
};

const SkillCard = ({ name, icon }: {name:any, icon:any}) => {
  return (
    <div
      className={`ml-2 rounded-lg shadow-md p-4 hover:shadow-xl border-r-8 border-black border-y border-x transition duration-300`}
    >
      <div className="text-lg font-bold mb-2">
        {name}{" "}
        {icon && (
          <Image src={icon} className="w-10 h-10" alt="" />
        )}
      </div>
      <div className="text-gray-600"></div>
    </div>
  );
};

const skills = [
  {
    name: "HTML",
    icon: "/html5.svg",
  },
  {
    name: "CSS",
    icon: "/css3-alt.svg",
  },
  {
    name: "JS",
    icon: "/js.svg",
  },
  {
    name: "NextJs",
    icon: "/nextjs.svg",
  },
  {
    name: "Python",
    icon: "/python.svg",
  },
  {
    name: "Git",
    icon: "/git.svg",
  },
];

export default Skills;
