import { initialData } from "./seed";
import prisma from '../lib/prisma';
import { Size } from "@prisma/client";
import { countries } from "./seed-countries";

async function main() {

    // await Promise.all([
        await prisma.orderAddress.deleteMany();
        await prisma.orderItem.deleteMany();
        await prisma.order.deleteMany();
        await prisma.userAddress.deleteMany();
        await prisma.user.deleteMany();
        await prisma.country.deleteMany();
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();
    // ])

    const { categories, products, users } = initialData;

    const country = countries;

    await prisma.user.createMany({
        data: users
    });


    const categoriesData = categories.map( name =>({ name }))

    await prisma.category.createMany({
        data: categoriesData
    });

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce( (map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>);

    // const {images, type, ...product1} = products[0];

    // await prisma.product.create({
    //     data: {
    //         ...product1,
    //         categoryId: categoriesMap['shirts']
    //     }
    // })

    products.forEach(async (product) => {
        const { type, images, ...rest } = product;

        const debProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type],
                 // Cast ValidSizes[] to Size[]
            },
        });

        const imagesData = images.map( image =>({
            url: image,
            productId: debProduct.id
        }));
        
        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    await prisma.country.createMany({ data: country });

    console.log('Seed ejecutado correctamente');
}






(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();