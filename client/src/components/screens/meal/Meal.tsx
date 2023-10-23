import { IMeal } from "@/models/IMeal";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import cl from "./Meal.module.scss";
import MealWeek from "./MealWeek/MealWeek";

interface Props {
  meals: IMeal[];
}

const Meal: FC<Props> = ({ meals }) => {
  const { query } = useRouter();

  const modalActiveHandle = {
    show: (state: boolean) => null,
    setMeal: (meal: IMeal) => null,
  };

  return (
    <div className={cl.meal}>
      {query.id === "male" ? (
        <Image
          className={cl.meal__bg}
          priority
          src={"/meal-man-bg.png"}
          fill
          alt=""
        />
      ) : null}
      {query.id === "female" ? (
        <Image
          className={cl.meal__bg}
          priority
          src={"/meal-woman-bg.png"}
          fill
          alt=""
        />
      ) : null}
      <div className={`${cl.meal__container} _container`}>
        <div className={cl.meal__content}>
          <div className={cl.meal__item}>
            <div className={cl.meal__slides}>
              {meals.map((item) => {
                return (
                  <div className={cl.meal__slide} key={item.id}
                    onClick={() => {
                      modalActiveHandle.show(true);
                      modalActiveHandle.setMeal(item);
                    }}
                  >
                    <div className={cl.meal__slide__img}>
                      <img src={item.img} alt="" />
                    </div>
                    <h3 className={cl.meal__slide__title}>{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <MealWeek modalActiveHandle={modalActiveHandle} />
    </div>
  );
};

export default Meal;
