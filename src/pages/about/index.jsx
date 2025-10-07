import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import VisionMissionSection from "./components/VisionMissionSection";
import CompanyTimeline from "./components/CompanyTimeline";
import FounderStories from "./components/FounderStories";
import TestimonialsSection from "./components/TestimonialsSection";
import TeamPhilosophy from "./components/TeamPhilosophy";
import CallToAction from "./components/CallToAction";

const About = () => {
	useEffect(() => {
		// Set page title
		document.title =
			"About VishwAlpha - Transforming Education with AI Intelligence";

		// Scroll to top on page load
		window.scrollTo(0, 0);

		// Add scroll reveal animation
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("revealed");
				}
			});
		}, observerOptions);

		// Observe all scroll-reveal elements
		const scrollElements = document.querySelectorAll(".scroll-reveal");
		scrollElements?.forEach((el) => observer?.observe(el));

		return () => {
			scrollElements?.forEach((el) => observer?.unobserve(el));
		};
	}, []);

	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Header */}
			<Header />
			{/* Page Content */}
			<main className="relative">
				{/* Hero Section */}
				<HeroSection />

				{/* Vision & Mission Section */}
				<VisionMissionSection />

				{/* Company Timeline */}
				<CompanyTimeline />

				{/* Founder Stories */}
				<FounderStories />

				{/* Testimonials Section */}
				<TestimonialsSection />

				{/* Team Philosophy */}
				<TeamPhilosophy />

				{/* Call to Action */}
				<CallToAction />
			</main>
			{/* Back to Top Button */}
			<motion.button
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow hover:shadow-glow-lg transition-all duration-300 z-50"
				aria-label="Back to top"
			>
				<svg
					viewBox="0 0 24 24"
					className="w-6 h-6 text-white"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path d="m18 15-6-6-6 6" />
				</svg>
			</motion.button>
		</div>
	);
};

export default About;
