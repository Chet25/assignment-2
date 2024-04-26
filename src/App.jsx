import { useSelector } from "react-redux";
import s1_desktop_bg from "./assets/images/first section/desktop-background.jpg";
import s1_mobile_bg from "./assets/images/first section/mobile-bg.jpg";
import logo from "./assets/images/mislaneous/logo.png";
import Button from "./components/button";
import star from "./assets/images/mislaneous/star.svg"
import s7hat from "./assets/images/mislaneous/Frame.png";
import s7clip from "./assets/images/mislaneous/Frame2.png";
import s7profile from "./assets/images/mislaneous/section7img.png";
import s3first from "./assets/images/third section/first-img.png";
import s3second from "./assets/images/third section/second-img.png";
import s3third from "./assets/images/third section/third-img.png";
import s8googleplay from "./assets/images/mislaneous/google_play.png";
import s8appstore from "./assets/images/mislaneous/app_store.png";
import s8phone from "./assets/images/mislaneous/phone.png";
import { FaPinterestP } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

function App() {
	const data = useSelector((state) => state.data.value);
	// console.log(data.section1.title)

	return (
		<>
			{/* header */}
			<header className=" h-[5rem] w-full flex items-center relative ">
				<div className=" absolute h-10 w-8 left-5 top-7 flex flex-col gap-[7px] cursor-pointer ">
					<span className=" h-1 block gap-2 bg-green "></span>
					<span className=" h-1 block gap-2 bg-green "></span>
					<span className=" h-1 block gap-2 bg-green "></span>
				</div>
				<img className="mx-auto" src={logo} alt="logo" />
			</header>

			{/* First section */}
			<section
				id="section1"
				className=" w-full h-[33.75rem] sm:h-[39.93rem] relative flex "
			>
				{/* left div of section 1 bg */}
				<div className="hidden sm:block w-1/5 h-[39.93rem] bg-darkRed "></div>
				{/* right bg imahe of section 1 */}
				<div className="hidden sm:block  w-4/5 h-[39.93rem] z-[5] ">
					<img
						className="object-cover h-full w-full object-right "
						src={s1_desktop_bg}
						alt="s1_bg"
					/>
				</div>
				{/* bg of mobile section 1 */}
				<div className="block sm:hidden w-full h-[33.75rem]  ">
					<img
						className=" object-cover h-full w-full object-center "
						src={s1_mobile_bg}
						alt="s1_bg"
					/>
				</div>
				{/* content of section 1 */}
				<div className=" absolute z-10 bg-mobile-gradient h-[33.75rem] w-full flex flex-col justify-center p-4 ">
					<div className=" w-[19.8rem]  ">
						<h3 className=" text-[#FFF7E2] font-normal text-16 leading-4 mb-4 ">
							{" "}
							{data.section1.title}{" "}
						</h3>
						<h1 className=" text-24 font-bold text-[#FFF7E2] ">
							{" "}
							{data.section1.heading1}{" "}
						</h1>
						<h3 className=" text-24 font-bold text-[#FFF7E2] mb-4 ">
							{data.section1.heading2}
						</h3>
						<p className=" text-[#C9C9C9] font-medium text-14 w-[18.6rem] ">
							{data.section1.description}
						</p>
					</div>
					<Button text={data.section1.button}></Button>
				</div>
			</section>
			{/* feature list of ssectinn 1 */}
			<ul className=" flex flex-col ">
				{data.section1.features.map((item, index) => {
					return (
						<li
							className=" flex bg-peach h-[110px] justify-center items-center gap-[18px] outline outline-[#E9E9E9] outline-1 "
							key={index}
						>
							<div className=" size-[70px] bg-white flex justify-center items-center rounded-full outline outline-green outline-1 ">
								<img
									className=" size-10 "
									src={item.image}
									alt="features"
								/>
							</div>
							<p className=" font-bold text-[15px] text-green w-[172px] ">
								{item.description}
							</p>
						</li>
					);
				})}
			</ul>

			{/* Section 2 */}

			<section id="section2" className="  text-center my-[70px] ">
				<h2 className=" text-32 font-bold text-green mx-auto w-[334px] leading-[1.2] mb-8 ">
					{data.section2.title}
				</h2>
				<p className=" text-[#666666] text-14 font-normal mx-auto w-[298px] mb-[40px] ">
					{data.section2.description}
				</p>
				<div className=" size-[230px] mx-auto relative before:content-[''] before:absolute before:h-full before:w-full before:bg-chakraSectino2 before:bg-cover after:content-[''] after:absolute after:h-full after:w-full after:bg-womenSectino2 after:bg-cover after:bg-center before:bg-center before:left-0 before:top-0 after:left-0 after:top-0  "></div>
				<ul className=" grid grid-cols-[repeat(auto-fit,154px)] gap-5 justify-center mt-5 ">
					{data.section2.features.map((item, index) => {
						let a = item.image
							.split("/")
							[item.image.split("/").length - 1].split(".")[0];
						return (
							<li
								key={index}
								className=" w-[154px] border rounded-12 py-4 px-3 flex flex-col items-center gap-[10px] "
							>
								<div className="mx-auto ${item.color}   rounded-full size-[64px] flex justify-center items-center ">
									<img
										className=" size-[42px] "
										src={item.image}
										alt={a}
									/>
								</div>
								<h3 className=" font-bold text-15 w-[99px] ">
									{item.title}
								</h3>
								<p className=" w-[136px] font-medium text-13 text-[#6D6B6B] leading-4 ">
									{item.description}
								</p>
							</li>
						);
					})}
				</ul>
			</section>

			{/* Section - 3 */}
			<section id="section3"
			className=" bg-peach pt-[2.5rem] px-[2rem] pb-[5.5rem] text-center ">
				<h2 className=" font-bold text-32 leading-[41px] mb-[1.5rem] text-green text-center ">
					{data.section3.title}
				</h2>
				<ul>
					{/* first card */}
					<li className=" *:rounded-[2rem] space-y-6 ">
						<div className=" h-[267px] bg-white text-center flex flex-col items-center justify-center border-t-[5px] border-t-green shadow-lg ">
							<h4 className=" w-[282px] text-24 font-semibold leading-[38px] text-green ">{data.section3.cards.card1.heading}</h4>
							<p className=" font-normal text-15 w-[249px] leading-[19px] text-green ">{data.section3.cards.card1.description}</p>
						</div>
						<img className=" object-cover w-full mx-auto " src={s3first} alt="s3first" />
					</li>
					{/* second card */}
					<li className=" *:rounded-[2rem] space-y-6 ">
						<div className=" h-[267px] bg-white text-left flex flex-col items-center justify-center border-t-[5px] border-t-green shadow-lg ">
							<h4 className=" w-[263px] mb-5 text-24 font-bold leading-[30px] text-green ">{data.section3.cards.card2.heading}</h4>
							<p className=" font-normal text-20 w-[263px] leading-[25px] ">{data.section3.cards.card2.description}</p>
						</div>
						<img className=" object-cover w-full mx-auto " src={s3second} alt="s3second" />
					</li>
					<li  className=" *:rounded-[2rem] space-y-6 ">
						<div className=" h-[267px] bg-white text-left flex flex-col items-center justify-center border-t-[5px] border-t-green shadow-lg ">
							<h4 className=" w-[263px] mb-5 text-24 font-bold leading-[30px] text-green ">{data.section3.cards.card3.heading}</h4>
							<p className=" font-normal text-20 w-[263px] leading-[25px] ">{data.section3.cards.card3.description}</p>
						</div>
						<img className=" object-cover w-full mx-auto " src={s3third} alt="s3third" />
					</li>
					<li className=" *:rounded-[2rem] space-y-6 ">
						<div className=" h-[267px] bg-white text-left flex flex-col items-center justify-center border-t-[5px] border-t-green shadow-lg ">
							<h4 className=" w-[263px] mb-5 text-24 font-bold leading-[30px] text-green ">{data.section3.cards.card4.heading}</h4>
							<p className=" font-normal text-20 w-[263px] leading-[25px] ">{data.section3.cards.card4.description}</p>
						</div>
					</li>
					
				</ul>
			</section>

			{/* Section - 4 */}

			<section
				id="section4"
				className="relative h-[514px] flex flex-col justify-center items-center bg-mobilebg-section4 bg-desk bg-no-repeat bg-center bg-cover
				before:content-[''] before:absolute before:block before:size-full before:bg-section4-mobile-gradient "
			>
				<h2 className=" w-[246px] font-medium text-[#FFF7E2] text-32 leading-[41px] text-center z-10 ">
					{data.section4.title}
				</h2>
				<Button text={data.section4.button} />
			</section>

			{/* Section - 5 */}

			<section id="section5" className=" pb-[5rem] ">
				<h2 className=" mt-[62px] w-[262px] mx-auto font-bold text-32 text-green text-center leading-[41px] ">
					{data.section5.title}
				</h2>
				<p className=" w-[302px] text-16 font-normal leading-[20px]  mx-auto text-center mt-[24px] text-[#323232] ">
					{data.section5.description}
				</p>

				{/* section - 5 carasoul */}

				<ul className=" h-[360px] w-[328px] mx-auto flex items-center overflow-x-scroll snap-x snap-mandatory gap-[1rem] my-[40px] scroll-smooth no-scrollbar overscroll-x-contain ">
					{data.section5.cards.map((item, index) => {
						return (
							<li
								key={index + 1}
								className=" h-[315px] w-[290px] flex flex-col text-center items-center gap-[20px] py-[25px] px-[20px] mx-[20px] snap-center snap-always bg-peach border-t-[5px] border-green rounded-[20px] shadow-lg "
							>
								<div className=" size-[90px] bg-green/[66%] flex justify-center items-center rounded-full border border-green ">
									<span className=" text-48 font-bold text-white ">
										{index + 1}
									</span>
								</div>
								<h3 className=" w-[253px] font-bold text-24 leading-[30px] text-green ">
									{item.heading}
								</h3>
								<p className=" text-20 text-[#2E2E2E] w-[250px] text-center leading-[25px] ">
									{item.description}
								</p>
							</li>
						);
					})}
				</ul>

				<ul className=" flex gap-[14px] justify-center  ">
					{data.section5.cards.map((_, index) => {
						return (
							<li
								key={index + 1}
								className={` size-[10px] bg-slate-500/[0.5] rounded-full first:bg-green/[0.9]  `}
							></li>
						);
					})}
				</ul>
			</section>

			{/* Sectiion - 6 */}
			<section
				id="sectino6"
				className=" bg-peach h-[43rem] pt-[65px] pb-[50px] flex flex-col gap-[30px] items-center "
			>
				<h2 className=" w-[280px] leading-[41px] font-bold text-green text-32 text-center mx-auto ">
					{data.section6.title}
				</h2>

				{/* Section - 6 carasoul */}
				<ul className=" h-[390px] w-[335px] flex overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar overscroll-x-contain  ">
					{data.section6.cards.map((item, index) => {
						return (
							<li
								key={index + 1}
								className=" bg-white h-[370px] min-w-[19rem] shadow-lg px-[22px] py-[22px] snap-center snap-always mx-[25px] space-y-5 rounded-xl "
							>
								<h6 className=" h-[55px] w-full font-bold text-16  ">
									Consulted for Skin
								</h6>
								<div className=" flex ">
									<img
										className=" size-[50px] rounded-full bg-slate-600 "
										src=""
										alt=""
									/>
									<h3 className=" flex flex-col w-[120px] ml-[10px] font-semibold text-16 ">
										{item.name}
										<span className=" font-normal text-15 ">
											{item.place}
										</span>
									</h3>

									<span>{item.date}</span>
								</div>
								<ul className=" flex gap-1 ">
									<li><img src={star} alt="star" /></li>
									<li><img src={star} alt="star" /></li>
									<li><img src={star} alt="star" /></li>
									<li><img src={star} alt="star" /></li>
									<li><img src={star} alt="star" /></li>
									
								</ul>
								<h4 className=" font-bold text-20 ">{`"${item.highlight}"`}</h4>
								<p className=" text-16 font-normal  ">
									{item.review}
								</p>
							</li>
						);
					})}
				</ul>

				<ul className=" flex gap-[14px] justify-center  ">
					{data.section6.cards.map((_, index) => {
						return (
							<li
								key={index + 1}
								className={` size-[10px] bg-slate-500/[0.5] rounded-full first:bg-green/[0.9]  `}
							></li>
						);
					})}
				</ul>
			</section>

			{/* Section - 7 */}

			<section
				id="sectino7"
				className=" bg-white h-[43rem] pt-[65px] pb-[50px] flex flex-col gap-[30px] items-center "
			>
				<h2 className=" w-[280px] leading-[41px] font-bold text-green text-32 text-center mx-auto ">
					{data.section7.title}
				</h2>

				{/* Section - 7 carasoul */}
				<ul className=" h-[390px] w-[335px] flex overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar overscroll-x-contain  ">
					{data.section7.cards.map((item, index) => {
						return (
							<li
								key={index + 1}
								className=" bg-peach h-[390px] min-w-[18.5rem] shadow-xl snap-center snap-always mx-[25px] flex flex-col justify-end items-center rounded-[3rem] overflow-clip gap-[8px]  "
							>
								<img
									className="object-center object-cover mt-[10px] size-[140px] rounded-full bg-slate-500 "
									src={s7profile}
									alt="profile image"
								/>
								<h3 className=" font-bold text-20 ">
									{item.name}
								</h3>
								<h5 className=" font-medium text-15 text-[#838383] ">
									{item.expertise}
								</h5>
								<p className=" text-16 font-normal text-[#0C0C0C] ">
									<img
										className="inline-block mr-[5px]"
										src={s7hat}
										alt="scolar hat"
									/>
									{item.experience} years of experience
								</p>
								<p className=" text-green bg-green/[0.15] px-[10px] py-[2px] rounded-full ">
									<img
										className="inline-block mr-[5px]"
										src={s7clip}
										alt="clip"
									/>
									{item.specialist}
								</p>
								<button className=" text-white bg-green w-full py-4 text-20 font-semibold mt-5 ">
									{data.section7.button}
								</button>
							</li>
						);
					})}
				</ul>

				<ul className=" flex gap-[14px] justify-center  ">
					{data.section7.cards.map((_, index) => {
						return (
							<li
								key={index + 1}
								className={` size-[10px] bg-slate-500/[0.5] rounded-full first:bg-green/[0.9]  `}
							></li>
						);
					})}
				</ul>
			</section>

			{/* Section - 8 */}
			<section
				id="section8"
				className=" bg-peach text-center flex flex-col items-center pt-[54px] pb-[5rem] "
			>
				<h2 className=" font-bold text-30 leading-[44px] text-green w-[303px]  ">
					{data.section8.heading1}
				</h2>
				<p className=" w-[260px] mt-[16px] font-normal text-14 leading-[18px] text-[#676767] ">
					{data.section8.description}
				</p>
				<img
					className=" w-[358px] h-[328px] -translate-x-3 "
					src={s8phone}
					alt="phone imgage"
				/>
				<h4 className=" font-medium text-18 leading-[28px] w-[275px]  ">
					{data.section8.heading2}
				</h4>
				<div className=" w-[277px] flex flex-col gap-[20px] items-center ">
					<h5 className=" w-[277px] mt-[30px] font-bold text-32 leading-[50px] ">
						Get The App Now{" "}
					</h5>
					<img
						className=" w-[270px]"
						src={s8googleplay}
						alt="googleplay"
					/>
					<img
						className=" w-[270px]"
						src={s8appstore}
						alt="appstore"
					/>
				</div>
			</section>

			{/* Section - 9 */}

			<section
				id="section9"
				className=" pt-[43px] pb-[173px] bg-green/[0.18] px-[30px] space-y-6 "
			>
				<h5 className="text-green font-bold text-18 ">Get in touch</h5>
				<p className=" font-normal text-18 leading-[23px] ">
					{data.section9.mobile.email}
				</p>
				<p className=" font-normal text-18 leading-[23px] ">
					{data.section9.mobile.address}{" "}
				</p>
				<p className=" font-normal text-18 leading-[23px] ">
					{data.section9.mobile.number}
				</p>

				<ul className=" text-white *:bg-green *:size-[40px] *:rounded-full *:flex *:justify-center *:items-center *:text-22 *:font-light  flex justify-start gap-[10px]  ">
					<a className="hover:scale-[1.2]" href="#">
						<li className="  *:stroke-1 ">
							<FiFacebook />
						</li>
					</a>

					<a className="hover:scale-[1.2]" href="#">
						<li className="  *:stroke-1 ">
							<FaInstagram />
						</li>
					</a>
					<a className="hover:scale-[1.2]" href="#">
						<li className=" ">
							<LuYoutube />
						</li>
					</a>
					<a className="hover:scale-[1.2]" href="#">
						<li className=" ">
							<CiTwitter />
						</li>
					</a>
					<a className="hover:scale-[1.2]" href="#">
						<li className="  *:stroke-1 ">
							<FiLinkedin />
						</li>
					</a>
					<a className="hover:scale-[1.2]" href="#">
						<li className=" *:stroke-1 ">
							<FaPinterestP />
						</li>
					</a>
				</ul>

				<h5 className="text-green font-bold text-18 ">Information</h5>

				<ul className=" flex flex-col gap-1 ">
					{data.section9.links.map((item, index) => (
						<li>
							<a
								key={index}
								href={item.link}
								className="text-[#474747] font-normal text-18 "
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
				<h6 className="text-green font-bold text-18 pt-[4rem] ">
					{data.section9.mobile.text}
				</h6>
				<form className=" h-[56px]  flex w-fit ">
					<input
						className=" w-[190px] pl-[20px] placeholder:text-black text-16 bg-transparent rounded-l-full border-[1px] border-black"
						type="text"
						placeholder="Your Email Address"
					/>
					<button className=" w-[121px] pl-[16px] pr-[30px] text-18 text-white bg-black font-bold border-[1px] border-black rounded-r-full ">
						Subscribe
					</button>
				</form>
			</section>
		</>
	);
}

export default App;
