/** @format */

import { useEffect, useState } from "react";

const textArray = "BILAL EL-ANEY".split("");
export default function Logo() {
  const [text, setText] = useState("");
  const [pointer, setPointer] = useState(0);

  useEffect(() => {
    setText((pre) => {
      //This used to ensure that there is dublicates even in the strict mode
      const safeText = pre.includes(`${textArray.at(0)}${textArray.at(0)}`)
        ? pre.replace(`${textArray.at(0)}${textArray.at(0)}`, textArray.at(0))
        : pre;

      if (pointer === 0) return textArray.at(pointer);
      else return safeText.concat(textArray.at(pointer));
    });
  }, [pointer]);

  useEffect(() => {
    const id = setInterval(() => {
      setPointer((pre) => {
        return pre < textArray.length - 1 ? pre + 1 : 0;
      });
    }, 700);
    return () => clearInterval(id);
  }, []);

  const displayText = text.includes(`${textArray.at(0)}${textArray.at(0)}`)
    ? text.replace(`${textArray.at(0)}${textArray.at(0)}`, textArray.at(0))
    : text;
  return <p className="logo">{displayText}</p>;
}