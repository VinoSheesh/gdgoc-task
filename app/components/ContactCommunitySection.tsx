"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Plus } from "lucide-react";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import ArrowLink from "./ui/ArrowLink";

interface TopicOption {
  id: string;
  title: string;
  description: string;
  icon: "arrow" | "plus" | "diamond" | "question";
}

const TOPICS: TopicOption[] = [
  {
    id: "joining-learning",
    title: "Joining & learning",
    description: "Getting started, learning tracks, and participation",
    icon: "arrow",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Community activities and shared ideas",
    icon: "plus",
  },
  {
    id: "speaking-sharing",
    title: "Speaking & sharing",
    description: "Workshops, knowledge sharing, and mentorship",
    icon: "diamond",
  },
  {
    id: "general-inquiry",
    title: "General inquiry",
    description: "Anything else you’d like to ask",
    icon: "question",
  },
];

export default function ContactCommunitySection() {
  const [selectedTopic, setSelectedTopic] = useState<string>("Joining & learning");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !subject || !message || !agreed) {
      return;
    }
    setSubmitted(true);
  };

  const renderIcon = (type: TopicOption["icon"]) => {
    switch (type) {
      case "arrow":
        return <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.4] text-[#1a73e8]" />;
      case "plus":
        return <Plus className="h-4.5 w-4.5 stroke-[2.4] text-[#1a73e8]" />;
      case "diamond":
        return (
          <svg
            viewBox="0 0 24 24"
            className="h-4.5 w-4.5 fill-none stroke-[#1a73e8] stroke-[2.4]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
        );
      case "question":
        return (
          <span className="inline-flex h-4.5 w-4.5 items-center justify-center text-[15px] font-bold leading-none text-[#1a73e8]">
            ?
          </span>
        );
    }
  };

  return (
    <section className="w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-24 lg:pb-32">
      <Container>
        {/* Header Section */}
        <div className="max-w-3xl">
          <SectionBadge label="CONTACT • LET'S CONNECT" className="mb-4 sm:mb-5" />

          <h1 className="text-[36px] sm:text-[46px] md:text-[52px] lg:text-[58px] font-bold leading-[1.08] tracking-tight text-[#111827]">
            Good things start with{" "}
            <span className="text-[#1a73e8]">hello.</span>
          </h1>

          <p className="mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-gray-500">
            A question, a collaboration, or an idea for the community? Tell us what’s
            on your mind.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Topic Selection & Updates Card */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div>
              <h2 className="text-[20px] sm:text-[22px] font-bold tracking-tight text-[#111827]">
                What brings you here?
              </h2>
              <p className="mt-1 text-[13px] sm:text-[14px] text-gray-500">
                Pick the closest topic in the form. We’ll take it from there.
              </p>

              {/* 4 Topic Cards */}
              <div className="mt-5 space-y-3">
                {TOPICS.map((topic) => {
                  const isSelected = selectedTopic === topic.title;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.title)}
                      className={`w-full text-left rounded-2xl p-4 sm:p-4.5 transition-all duration-200 border flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-[#eaf2ff] border-[#b9d5fd] shadow-xs"
                          : "bg-white border-gray-200/80 hover:border-gray-300 hover:bg-gray-50/60"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {renderIcon(topic.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14px] sm:text-[15px] font-bold text-[#111827]">
                          {topic.title}
                        </div>
                        <div className="mt-0.5 text-[12px] sm:text-[13px] text-gray-500 leading-snug">
                          {topic.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Soft Cream / Yellow Card: Updates */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#fff7df] p-6 sm:p-7">
              <SectionBadge label="STAY CURIOUS, STAY CONNECTED" className="mb-3" />

              <h3 className="text-[18px] sm:text-[20px] font-bold leading-snug tracking-tight text-[#111827]">
                Looking for community updates?
              </h3>

              <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-gray-600">
                Follow @gdgoc.ugm for learning opportunities and what’s happening in
                the community.
              </p>

              <div className="mt-4">
                <ArrowLink
                  href="https://instagram.com/gdgoc.ugm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  Find @gdgoc.ugm
                </ArrowLink>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#f1f3f4] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-xs">
              {/* Form Card Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-[22px] sm:text-[24px] md:text-[26px] font-bold tracking-tight text-[#111827]">
                  Send us a message
                </h2>
                <ArrowUpRight className="h-5 w-5 stroke-[2.4] text-[#1a73e8]" />
              </div>

              <p className="mt-1.5 text-[12px] sm:text-[13px] text-gray-500">
                Fields marked * are required.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-white p-8 text-center border border-gray-200">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf2ff] text-[#1a73e8]">
                    <Check className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold text-[#111827]">
                    Message sent successfully!
                  </h3>
                  <p className="mt-2 text-[14px] text-gray-500 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out, {firstName || "friend"}. We’ll get
                    back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFirstName("");
                      setLastName("");
                      setEmail("");
                      setOrganization("");
                      setSubject("");
                      setMessage("");
                      setAgreed(false);
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1a73e8] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#1557b0]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-4.5">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block text-[13px] font-medium text-[#111827]"
                      >
                        First name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Your first name"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#111827] placeholder:text-gray-400 focus:border-[#1a73e8] focus:outline-none focus:ring-1 focus:ring-[#1a73e8] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block text-[13px] font-medium text-[#111827]"
                      >
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Your last name"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#111827] placeholder:text-gray-400 focus:border-[#1a73e8] focus:outline-none focus:ring-1 focus:ring-[#1a73e8] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[13px] font-medium text-[#111827]"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Where we can reply to you"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#111827] placeholder:text-gray-400 focus:border-[#1a73e8] focus:outline-none focus:ring-1 focus:ring-[#1a73e8] transition-all"
                    />
                  </div>

                  {/* University / organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="mb-1.5 block text-[13px] font-medium text-[#111827]"
                    >
                      University / organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Where you study or work (optional)"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#111827] placeholder:text-gray-400 focus:border-[#1a73e8] focus:outline-none focus:ring-1 focus:ring-[#1a73e8] transition-all"
                    />
                  </div>

                  {/* Inquiry category */}
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-1.5 block text-[13px] font-medium text-[#111827]"
                    >
                      Inquiry category *
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        required
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-[14px] text-[#111827] focus:border-[#1a73e8] focus:outline-none focus:ring-1 focus:ring-[#1a73e8] transition-all cursor-pointer"
                      >
                        {TOPICS.map((topic) => (
                          <option key={topic.id} value={topic.title}>
                            {topic.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 stroke-[2.2] text-[#1a73e8]" />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-[13px] font-medium text-[#111827]"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="A short introduction to your question"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#111827] placeholder:text-gray-400 focus:border-[#1a73e8] focus:outline-none focus:ring-1 focus:ring-[#1a73e8] transition-all"
                    />
                  </div>

                  {/* Your message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[13px] font-medium text-[#111827]"
                    >
                      Your message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us a little about your question or idea..."
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#111827] placeholder:text-gray-400 focus:border-[#1a73e8] focus:outline-none focus:ring-1 focus:ring-[#1a73e8] transition-all resize-y min-h-[110px]"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#1a73e8] focus:ring-[#1a73e8] cursor-pointer"
                      />
                      <span className="text-[12px] sm:text-[13px] leading-relaxed text-gray-600">
                        I agree that the information I share can be used to respond
                        to this inquiry.
                      </span>
                    </label>
                  </div>

                  {/* Form Footer: Button & Disclaimer */}
                  <div className="pt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] px-6 py-3 text-[14px] font-medium text-white shadow-xs transition-all active:scale-[0.98]"
                    >
                      <span>Send message</span>
                      <ArrowRight className="h-4 w-4 stroke-[2.2]" />
                    </button>

                    <p className="text-[11px] sm:text-[12px] leading-tight text-gray-400 sm:text-right max-w-[240px]">
                      Please don’t include passwords or sensitive personal
                      information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

