import AssessmentIcon from '@mui/icons-material/Assessment';
const Navbar = () => {
  return (
    <div className="container h-16 bg-gradient-to-r from-cyan-800 to-teal-600 flex justify-between items-center">
      {/* LEFT */}
      <div className="flex">
        <ul className="space-x-3 mx-5 flex items-center">
          <li className='flex items-center space-x-2'>
          <AssessmentIcon style={{ fontSize: '30px', lineHeight: '36px', color: 'white' }} />
            <span className="text-white font-bold text-3xl">Report.in</span>
          </li>
        </ul>
      </div>
      {/* RIGHT */}
      <div className="flex">
        <ul className="space-x-10 mx-5 flex">
          <li>
            <span className="text-white font-bold">HOME</span>
          </li>
          <li>
            <span className="text-white font-bold">CONTACT</span>
          </li>
          <li>
            <span className="text-white font-bold">BLOG</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
