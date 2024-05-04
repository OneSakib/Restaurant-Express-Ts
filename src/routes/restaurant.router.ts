import express, { NextFunction, Request, Response, Router } from "express";
import {
  createRestaurantService,
  deleteRestaurantService,
  getAllRestaurantsService,
  getRestaurantByIdService,
  updateRestaurantService,
} from "../services/restaurant.service";
const restaurantRouter: Router = express.Router();

/* GET Restaurant listing. */
restaurantRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json(await getAllRestaurantsService());
  }
);

/* GET By Id Restaurant listing. */
restaurantRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json(await getRestaurantByIdService());
  }
);
/* GET Restaurant listing. */
restaurantRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json(await createRestaurantService());
  }
);
/* GET Restaurant listing. */
restaurantRouter.put(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json(await updateRestaurantService());
  }
);
/* GET Restaurant listing. */
restaurantRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.json(await deleteRestaurantService());
  }
);

export default restaurantRouter;
