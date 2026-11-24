
import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.webp";
import Me2 from "@/public/image/me2.webp";
import Me3 from "@/public/image/me3.webp";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3 text-white">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5">
					<div className="images relative w-full aspect-square">
						<div className="absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Akbar Danu"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>

						<div className="absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Akbar Danu"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>

						<div className="absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Akbar Danu"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>

				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,
						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3 text-white">
						Akbar Danu
					</h2>

					<p className="text-gray-200 text-justify title text-lg leading-relaxed">
						Perjalanan profesional saya memberi kesempatan untuk mengenal berbagai bidang pekerjaan, mulai dari operasional bisnis dan pelayanan pelanggan hingga proses produksi dan desain kreatif. Dari berbagai pengalaman tersebut, saya memperoleh pemahaman mengenai koordinasi kerja, pengelolaan administrasi, distribusi produk, penanganan pelanggan, serta proses operasional sehari-hari.

						<br />
						<br />

						Dalam beberapa pekerjaan sebelumnya, saya terlibat dalam pengelolaan dokumentasi dan jadwal, koordinasi tim, kegiatan penjualan dan pemasaran, pelayanan pelanggan, hingga menjaga kualitas produk. Berbagai tanggung jawab tersebut membentuk kemampuan saya dalam bekerja secara fleksibel, teliti, serta beradaptasi dengan kebutuhan dan lingkungan kerja yang berbeda.

						<br />
						<br />

						Saat ini, saya sedang menempuh pendidikan di bidang{" "}
						<span className="text-purple-300 font-medium">
							Manajemen Ritel di Universitas Bojonegoro
						</span>
						. Saya memiliki ketertarikan pada dunia bisnis ritel, pemasaran, pengelolaan persediaan, dan manajemen operasional. Selain itu, saya juga mengembangkan kemampuan sebagai{" "}
						<span className="text-purple-300 font-medium">
							desainer grafis lepas
						</span>
						, khususnya dalam komunikasi visual dan pengembangan ide kreatif melalui desain digital.

						<br />
						<br />

						Saya terus mengembangkan kemampuan di bidang{" "}
						<span className="text-purple-300 font-medium">
							desain grafis, pemasaran digital, operasional penjualan, dan manajemen bisnis
						</span>
						. Dengan menggabungkan pengalaman kerja, pengetahuan akademis, dan keterampilan kreatif, saya ingin memperluas wawasan profesional serta memberikan kontribusi yang bermanfaat dalam berbagai proyek dan peluang bisnis di masa mendatang.
					</p>

					<Card />
				</motion.div>
			</div>
		</>
	);
}
