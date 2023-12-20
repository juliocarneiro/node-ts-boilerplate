import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { GetHomePageController } from "./controllers/GetHomePageController";

const router = Router();

const getHomePage = new GetHomePageController();
const createProduct = new CreateProductController();

router.post("/product", createProduct.handle);
router.get("/", getHomePage.handle);

export { router };
