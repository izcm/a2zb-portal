import { siDiscord, siGmail } from "simple-icons";

const SiIcon = ({ icon }: { icon: { path: string } }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d={icon.path} />
  </svg>
);

type ContactCardProps = {
  href: string;
  icon: React.ReactNode;
  platform: string;
  handle: string;
};

const ContactCard = ({ href, icon, platform, handle }: ContactCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-4 px-4 py-3 rounded-lg no-underline
      border border-white/5 bg-white/3
      transition-all hover:bg-white/6 hover:border-white/10
    "
  >
    <div className="w-8 flex justify-center shrink-0 text-neutral-300">
      {icon}
    </div>

    <div className="flex flex-col items-start gap-1">
      <span className="w-full text-left text-xs text-muted leading-none">
        {platform}
      </span>
      <span className="w-full text-left text-sm text-neutral-200 leading-tight font-medium">
        {handle}
      </span>
    </div>
  </a>
);

export const Contact = () => (
  <div className="flex flex-col gap-3">
    <ContactCard
      href="https://discord.com/users/745594868826505227"
      icon={<SiIcon icon={siDiscord} />}
      platform="Discord"
      handle="@izcm"
    />
    <ContactCard
      href="mailto:placeholder@example.com"
      icon={<SiIcon icon={siGmail} />}
      platform="Email"
      handle="izcm@izblocks.com"
    />
  </div>
);
