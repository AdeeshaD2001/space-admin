import {AddProductDTO} from "@/server/application/common/dtos/cloth";
import {log} from "@/server/application/common/services/logging";
import {dynamicClient} from "@/server/infrastructure/clients/sanity";
import {deleteSize} from "@/server/infrastructure/repositories/attributes/size-repository";
import {z} from "zod";
import {createId} from "@paralleldrive/cuid2";

type AddProductCommand = z.infer<typeof AddProductDTO>;

export default async function createProductCommandHandler(
    command: AddProductCommand
) {
    const {name,length,width,image} = command;
    const chair = {
        _id:createId(),
        _type: "chair",
        name,
        length,
        width,
        image
    };
    const publishedCloth = await dynamicClient.create(chair);
}