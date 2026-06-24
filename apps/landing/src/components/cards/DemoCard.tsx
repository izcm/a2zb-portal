type DemoCardProps = {
  title: string;
  desc: string;
  id: string;
  img: string;
};

export const DemoCard = ({ title, desc, id, img }: DemoCardProps) => {
  return (
    <div
      className="
        flex
        border border-default/20 rounded-lg p-4
        cursor-pointer bg-surface/40
      "
    >
      {/* TITLE + DESCR */}
      <div className="text-start basis-3/4 ">
        <h3 className="text-white tracking-tight mb-1">{title}</h3>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4">{desc}</p>
      </div>
      <div
        className="
          flex basis-1/4 items-center justify-center
          rounded-full rounded-full 
          mb-4 mt-2 w-32 h-32 bg-black/40
          "
      >
        <img
          src={`icons/${img}.svg`}
          alt={title}
          className="object-contain w-3/4 h-3/4"
        />
      </div>

      <button className="btn btn-primary demo-card__btn text-sm px-4 py-2 rounded-lg">
        View Demo →
      </button>
    </div>
  );
};
