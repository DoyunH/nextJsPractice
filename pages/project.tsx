import Tooltip from "@/components/Project/Tooltip";
import React from "react";

const Project = () => {
  return (
    <div className="p-20">
      <Tooltip
        englishSentence="A: Hi, how are you?"
        spanishSentence="Hola, ¿cómo estás?"
      />
      <Tooltip
        englishSentence="B: I'm good, thank you. And you?"
        spanishSentence="Estoy bien, gracias. ¿Y tú?"
      />
      <Tooltip
        englishSentence="A: I'm doing well, too. It's nice to meet you. My name is Jina."
        spanishSentence="También estoy bien. Mucho gusto conocerte. Me llamo Jina."
      />
      <Tooltip
        englishSentence="A: Pleased to meet you, Alice. I'm Duru."
        spanishSentence="Encantado de conocerte, Alice. Soy Duru."
      />
    </div>
  );
};

export default Project;
