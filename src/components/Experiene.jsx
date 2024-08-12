import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiene = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-2 text-sm font-bold text-neutral-400"
              >
                {experience.year}
              </motion.p>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="ml-4 bg-neutral-900 text-purple-500">
                  {" "}
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiene;
