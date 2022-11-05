import React from "react";

type MenuSectionProps = {};
export default function MenuSection({
  item: {
    title: mainTitle,
    list,
    description: {
      left: { text: titleLeft, image: imageLeft, scaleDown },
      right: { text: titleRight, image: imageRight },
      text: subTitle,
    },
  },
  index,
}) {
  return (
    <div
      className={`w-full md:w-1/2 p-6 flex-shrink-0 ${index > 1 && "mt-16"}`}
    >
      <h2 className="item-title text-2xl font-bold">{mainTitle}</h2>

      <div className="item-price flex justify-between items-center p-2 mt-3 rounded">
        <div className="flex items-center">
          <img
            src={imageLeft}
            alt=""
            className={scaleDown ? "w-5 h-5" : "w-8 h-8"}
          />
          <div className="ml-3 text-sm md:text-base">{titleLeft}</div>
        </div>
        <div className="flex items-center">
          <div className="mr-3 text-sm md:text-base">{titleRight}</div>
          <img src={imageRight} alt="" className="w-8 h-8 " />
        </div>
      </div>
      <div className="mt-4">{subTitle}</div>
      <dl>
        {list.map(({ title, description }) => (
          <React.Fragment key={title}>
            <dt className="text-lg font-semibold mt-3">{title}</dt>
            <dd className="description item-description italic">
              <p>{description}</p>
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}
