import Styles from "./dish-list.module.css";
import { Dish } from "..";
import { api } from "@/services";
import { useQuery } from "react-query";
import { Dishtype } from "@/types";
import { DishSkeleton } from "@/components";
import { DishListProps } from "./type";

export function DishList(props: DishListProps) {
  const fetchDishes = async () => {
    const response = await api.get<Dishtype[]>(`/deliveries?city=${props.citySlug}`);
    return response.data;
  };

  const { data, isFetching } = useQuery<Dishtype[]>("disehs", fetchDishes);

  return (
    <div className={Styles.list}>
      {isFetching ? (
        <DishSkeleton />
      ) : (
        data?.map((dish) => <Dish key={dish.id} {...dish} />)
      )}
    </div>
  );
}
