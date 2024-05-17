const RightSidebar = () => {
  return (
    <div className="h-screen mt-2">
      <div className="px-4 rounded-box">
        <div className="border-2 border-olive-green bg-[url('https://www.farmer.gov.in/imagedefault/containerbg.jpg')] bg-fill text-black ">
          <div className="bg-emerald-800">
            <h1 className="menu heading_icon_agri_horti text-white">RELATED LINKS</h1>
          </div>
          <ul className="menu w-full flex flex-col ">
            <li className=""><a>Mobile Apps</a></li>
            <li className=""><a>e bulletin DAC & FW</a></li>
            <li className=""><a>Agricoop</a></li>
            <li className=""><a>Pradhan Mantri Fasal Bima Yojana</a></li>
            <li className=""><a>Data Entry Progress</a></li>
            <li className=""><a>Extension Reforms</a></li>
            <li className=""><a>DAC Dashboard</a></li>
            <li className=""><a>Media Gallery</a></li>
            <li className=""><a>mKishan</a></li>
            <li className=""><a>RKVY Projects</a></li>
            <li className=""><a>State Agriculture Department</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
