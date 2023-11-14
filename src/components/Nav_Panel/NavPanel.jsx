import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { all } from "axios";
import { useContext } from "react";
import { MainContext } from "../../context/Main_context";

const NavPanel = () => {
  const { allData } = useContext(MainContext);
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open === 1} className="border-b-5 border-black">
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="body flex w-[100%] justify-between items-center">
            <div className="flex space-x-4">
              <img className="h-[25px]" src="img/menu.png" alt="Google Logo" />
              <div className="chp">hy</div>
            </div>
            <img className="h-[20px]" src="img/arrow.png" alt="Google Logo" />
          </div>
        </AccordionHeader>
        <AccordionBody className=" py-[0px]">
          <div className="list pl-4">
            <div className="item px-5 border-l-4 border-blue-500 h-14 flex items-center text-lg font-bold text-black hover:bg-blue-500 hover:text-white cursor-pointer">
              lorem
            </div>
            <div className="item px-5 border-l-4 border-blue-500 h-14 flex items-center text-lg font-bold text-black hover:bg-blue-500 hover:text-white cursor-pointer">
              lorem
            </div>
            <div className="item px-5 border-l-4 border-blue-500 h-14 flex items-center text-lg font-bold text-black hover:bg-blue-500 hover:text-white cursor-pointer">
              lorem
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default NavPanel;
