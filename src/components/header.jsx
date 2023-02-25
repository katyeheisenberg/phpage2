import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import logo3 from '../../public/logo3.svg';

const Header = () => {
  return (
    <motion.div
      className="text-center py-10"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Image src={logo3} alt="" />
    </motion.div>
  );
}

export default Header
