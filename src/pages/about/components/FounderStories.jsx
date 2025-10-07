import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const FounderStories = () => {
	const [activeFounder, setActiveFounder] = useState(0);

	const founders = [
		{
			id: 1,
			name: "KLS Vishwanath",
			role: "Founder & CEO",
			image:
				"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
			background: "Student",
			story: `KLS Vishwanth CEO & Founder`,
			achievements: [
				"Led NEP 2020 implementation in 5 states",
				"Published 25+ research papers on AI in Education",
				"Recipient of National Education Excellence Award 2023",
				"Featured in Forbes India 40 Under 40",
			],
			philosophy:
				"Education is not about filling a bucket, but lighting a fire—and AI can help us light that fire in every student.",
		},
		{
			id: 2,
			name: "Maniteja Gaddam",
			role: "Co-Founder & CTO",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
			background: "Student",
			story: `Maniteja Student & CTO `,
			achievements: [
				"Developed 10+ AI models for educational applications",
				"Holds 8 patents in machine learning and NLP",
				"Published in top-tier AI conferences (NeurIPS, ICML)",
				"Winner of MIT Technology Review Innovators Under 35",
			],
			philosophy:
				"The best AI is invisible—it should enhance human potential without replacing human connection.",
		},
		{
			id: 3,
			name: "Moulya",
			role: "Co-Founder & Chief Academic Officer",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
			background:
				"Student",
			story: `Moulya Co-Founder and head of academics and management`,
			achievements: [
				"Transformed 50+ schools through innovative curricula",
				"Trained over 5,000 teachers in modern pedagogy",
				'Author of "The Future of Indian Education" bestseller',
				"Padma Shri recipient for contributions to education",
			],
			philosophy:
				"Technology should amplify the teacher's wisdom, not replace it. The human touch in education is irreplaceable.",
		},
	];

	const currentFounder = founders?.[activeFounder];

	return (
		<section className="py-20 bg-slate-800/30">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
						Meet Our <span className="text-gradient-primary">Visionaries</span>
					</h2>
					<p className="text-xl text-slate-300 max-w-3xl mx-auto">
						The passionate minds behind VishwAlpha's mission to transform
						education through intelligent innovation
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Founder Selection */}
					<div className="lg:col-span-1">
						<div className="space-y-4">
							{founders?.map((founder, index) => (
								<motion.div
									key={founder?.id}
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
										activeFounder === index
											? "bg-gradient-primary shadow-glow"
											: "bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/30"
									}`}
									onClick={() => setActiveFounder(index)}
								>
									<div className="flex items-center">
										<div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white/20">
											<Image
												src={founder?.image}
												alt={founder?.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h3 className="font-semibold text-white">
												{founder?.name}
											</h3>
											<p className="text-sm text-slate-300">{founder?.role}</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Founder Details */}
					<div className="lg:col-span-2">
						<motion.div
							key={activeFounder}
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30 backdrop-blur-sm"
						>
							{/* Header */}
							<div className="flex flex-col md:flex-row items-start md:items-center mb-8">
								<div className="w-24 h-24 rounded-xl overflow-hidden mr-6 mb-4 md:mb-0 border-2 border-violet-400/30">
									<Image
										src={currentFounder?.image}
										alt={currentFounder?.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-display font-bold text-white mb-2">
										{currentFounder?.name}
									</h3>
									<p className="text-lg text-violet-300 mb-2">
										{currentFounder?.role}
									</p>
									<p className="text-slate-400">{currentFounder?.background}</p>
								</div>
							</div>

							{/* Story */}
							<div className="mb-8">
								<h4 className="text-xl font-semibold text-white mb-4 flex items-center">
									<Icon
										name="BookOpen"
										size={20}
										className="mr-2 text-violet-400"
									/>
									Their Story
								</h4>
								<p className="text-slate-300 leading-relaxed whitespace-pre-line">
									{currentFounder?.story}
								</p>
							</div>

							{/* Achievements */}
							<div className="mb-8">
								<h4 className="text-xl font-semibold text-white mb-4 flex items-center">
									<Icon
										name="Trophy"
										size={20}
										className="mr-2 text-amber-400"
									/>
									Key Achievements
								</h4>
								<div className="grid md:grid-cols-2 gap-3">
									{currentFounder?.achievements?.map((achievement, index) => (
										<div key={index} className="flex items-start">
											<div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
											<p className="text-slate-300 text-sm">{achievement}</p>
										</div>
									))}
								</div>
							</div>

							{/* Philosophy */}
							<div className="bg-slate-600/30 rounded-xl p-6 border border-slate-500/30">
								<h4 className="text-lg font-semibold text-white mb-3 flex items-center">
									<Icon name="Quote" size={18} className="mr-2 text-pink-400" />
									Philosophy
								</h4>
								<p className="text-slate-300 italic leading-relaxed">
									"{currentFounder?.philosophy}"
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FounderStories;
