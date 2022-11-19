import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const fonts = [
  { name: "Font 1", char1: "a", char2: "d" },
  { name: "Font 2", char1: "i", char2: "e" },
  { name: "Font 3", char1: "u", char2: "f" },
  { name: "Font 4", char1: "e", char2: "g" },
];

const Swapper = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(
    "Ini adalah contoh kalimat yang digunakan sebagai contoh."
  );
  const [changedText, setChangedText] = useState("");

  useEffect(() => {
    let swaps = {};
    swaps[fonts[index].char1] = fonts[index].char2;
    swaps[fonts[index].char2] = fonts[index].char1;
    swaps[fonts[index].char1.toUpperCase()] = fonts[index].char2.toUpperCase();
    swaps[fonts[index].char2.toUpperCase()] = fonts[index].char1.toUpperCase();

    setChangedText(
      text
        .split("")
        .map((char) => swaps[char] || char)
        .join("")
    );
  }, [index, text]);

  return (
    <div className="container max-w-xl mx-auto py-3">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 mb-2">
        <h2 className="text-xl font-semibold text-left">Pilih Font :</h2>
        <div className="flex items-center gap-2">
          {fonts.map(({ name }, i) => (
            <FontRadioButton
              key={`font-${i}`}
              index={i}
              selected={index === i}
              name={name}
              setIndex={setIndex}
            />
          ))}
        </div>
      </div>
      <p className="mb-2">
        Menukar huruf {fonts[index].char1} dengan {fonts[index].char2} dan
        sebaliknya.
      </p>

      <textarea
        className="rounded w-full resize-none mb-2"
        rows={10}
        onChange={(event) => setText(event.target.value)}
      >
        {text}
      </textarea>

      <div className="flex justify-between items-center mb-2">
        <h5 className="text-lg">Hasil:</h5>
        <button
          onClick={() => navigator.clipboard.writeText(changedText)}
          className="px-3 py-1 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm flex gap-2 items-center"
        >
          <FontAwesomeIcon icon={faCopy} />
          <span>Salin teks</span>
        </button>
      </div>
      <p>{changedText}</p>
    </div>
  );
};

const FontRadioButton = ({ index, selected, name, setIndex }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="radio"
        name="font"
        id={`font-${index}`}
        checked={selected}
        onChange={() => setIndex(index)}
      />
      <label
        className="form-check-label inline-block text-gray-800 cursor-pointer"
        htmlFor={`font-${index}`}
      >
        {name}
      </label>
    </div>
  );
};

export default Swapper;
