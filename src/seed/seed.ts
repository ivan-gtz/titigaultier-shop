import bcryptjs from 'bcryptjs';

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'men' | 'women' | 'kid' | 'unisex'
}

interface SeeUser {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user'
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
    users: SeeUser[];
    categories: string[]
    products: SeedProduct[],
}




export const initialData: SeedData = {

    users: [
        {
            email: 'ivan@gmail.com',
            name: 'Iván Gutiérrez',
            password: bcryptjs.hashSync('123123', 10),
            role: 'admin'
        },
        {
            email: 'argos@gmail.com',
            name: 'argos',
            password: bcryptjs.hashSync('123123', 10),
            role: 'user'
        },
    ],
    categories: [
        'Shirts', 'Pants', 'Hoodies', 'Hats'
    ],
    products: [
        {
            description: 'Presentamos la Colección Tesla Chill. La sudadera de cuello redondo para hombre tiene un exterior premium y de peso elevado y un interior de felpa suave para mayor comodidad en cualquier estación. La prenda lleva un sutil logotipo \'T\' de poliuretano termoplástico en el pecho y la marca Tesla debajo del cuello trasero. Confeccionada en 60% algodón y 40% poliéster reciclado.',
            images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
            inStock: 7,
            price: 75,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'mens_chill_crew_neck_sweatshirt',
            type: 'shirts',
            tags: ['sweatshirt'],
            title: 'Sudadera de cuello redondo para hombre — Colección Chill',
            gender: 'men'
        },
        {
            description: 'La chaqueta-camisa acolchada para hombre presenta un diseño acolchado de ajuste único para ofrecer calor y movilidad en temporadas frías. Con una estética urbana, la chaqueta incluye discretos logos Tesla inyectados en silicona debajo del cuello trasero y en la manga derecha, además de cremalleras con tiradores de metal mate personalizados. Confeccionada en 87% nylon y 13% poliuretano.',
            images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
            inStock: 5,
            price: 200,
            sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
            slug: 'men_quilted_shirt_jacket',
            type: 'shirts',
            tags: ['jacket'],
            title: 'Chaqueta-camisa acolchada para hombre',
            gender: 'men'
        },
        {
            description: 'Presentamos la Colección Tesla Raven. La bomber ligera con cremallera para hombre tiene una silueta moderna y premium, hecha con una mezcla sostenible de bambú y algodón para versatilidad en cualquier estación. La prenda incluye sutiles logos Tesla de poliuretano termoplástico en el pecho izquierdo y debajo del cuello trasero, un bolsillo oculto en el pecho con tiradores de cremallera mate personalizados y un interior de felpa tipo french terry. Confeccionada en 70% bambú y 30% algodón.',
            images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
            inStock: 10,
            price: 130,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            slug: 'men_raven_lightweight_zip_up_bomber_jacket',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Cazadora bomber ligera con cremallera Raven para hombre',
            gender: 'men'
        },
        {
            description: 'Presentamos la Colección Tesla Turbine. Diseñada para estilo, comodidad y uso cotidiano, la camiseta de manga larga para hombre presenta un sutil logotipo \'T\' a base de agua en el pecho izquierdo y la marca Tesla debajo del cuello trasero. El material ligero está teñido dos veces, creando un estilo suave y casual ideal para cualquier estación. Confeccionada en 50% algodón y 50% poliéster.',
            images: ['1740280-00-A_0_2000.jpg', '1740280-00-A_1.jpg'],
            inStock: 50,
            price: 45,
            sizes: ['XS', 'S', 'M', 'L'],
            slug: 'men_turbine_long_sleeve_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta de manga larga Turbine para hombre',
            gender: 'men'
        },
        {
            description: 'Presentamos la Colección Tesla Turbine. Diseñada para estilo, comodidad y uso diario, la camiseta de manga corta para hombre presenta la palabra \'Tesla\' a base de agua en el pecho y nuestro logotipo \'T\' debajo del cuello trasero. El material ligero está teñido dos veces, creando un estilo suave y casual ideal para cualquier estación. Confeccionada en 50% algodón y 50% poliéster.',
            images: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
            inStock: 50,
            price: 40,
            sizes: ['M', 'L', 'XL', 'XXL'],
            slug: 'men_turbine_short_sleeve_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta de manga corta Turbine para hombre',
            gender: 'men'
        },
        {
            description: 'Diseñada para la comodidad, la camiseta Cybertruck Owl está confeccionada en 100% algodón y presenta nuestro icónico icono Cybertruck en la espalda.',
            images: ['7654393-00-A_2_2000.jpg', '7654393-00-A_3.jpg'],
            inStock: 0,
            price: 35,
            sizes: ['M', 'L', 'XL', 'XXL'],
            slug: 'men_cybertruck_owl_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Cybertruck Owl para hombre',
            gender: 'men'
        },
        {
            description: 'Inspirada en nuestro sistema integrado de energía solar y almacenamiento para el hogar, la camiseta Tesla Solar Roof promueve la energía limpia y sostenible dondequiera que vayas. Diseñada para ajuste, comodidad y estilo, la camiseta muestra una vista aérea de nuestro diseño Solar Roof en el frente con el logotipo \'T\' sobre la palabra \'Solar Roof\' en la espalda. Confeccionada en 100% algodón peruano.',
            images: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
            inStock: 15,
            price: 35,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: 'men_solar_roof_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Solar Roof para hombre',
            gender: 'men'
        },
        {
            description: 'Inspirada en el recurso más ilimitado del planeta, la camiseta Let the Sun Shine destaca nuestro sistema integrado de energía solar y almacenamiento. Diseñada para ajuste, comodidad y estilo, presenta un gráfico de atardecer junto con la palabra Tesla en el frente y nuestro logotipo \'T\' impreso sobre \'Solar Roof\' en la espalda. Confeccionada en 100% algodón peruano.',
            images: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
            inStock: 17,
            price: 35,
            sizes: ['XS', 'S', 'XL', 'XXL'],
            slug: 'men_let_the_sun_shine_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Let the Sun Shine para hombre',
            gender: 'men'
        },
        {
            description: 'Diseñada para ajuste, comodidad y estilo, la camiseta 3D Large Wordmark para hombre está confeccionada en 100% algodón peruano y lleva una marca Tesla en 3D de silicona impresa en el pecho.',
            images: ['8764734-00-A_0_2000.jpg', '8764734-00-A_1.jpg'],
            inStock: 12,
            price: 35,
            sizes: ['XS', 'S', 'M'],
            slug: 'men_3d_large_wordmark_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta 3D Large Wordmark para hombre',
            gender: 'men'
        },
        {
            description: 'Diseñada para ajuste, comodidad y estilo, la camiseta Tesla T Logo está confeccionada en 100% algodón peruano y presenta un logotipo \'T\' impreso en silicona en el pecho izquierdo.',
            images: ['7652426-00-A_0_2000.jpg', '7652426-00-A_1.jpg'],
            inStock: 5,
            price: 35,
            sizes: ['XS', 'S'],
            slug: 'men_3d_t_logo_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta 3D T Logo para hombre',
            gender: 'men'
        },
        {
            description: 'Diseñada para comodidad y estilo en todas las tallas, la camiseta Small Wordmark de Tesla está hecha en 100% algodón peruano y presenta una marca en 3D de silicona en el pecho izquierdo.',
            images: ['8528839-00-A_0_2000.jpg', '8528839-00-A_2.jpg'],
            inStock: 2,
            price: 35,
            sizes: ['XS', 'S', 'M'],
            slug: 'men_3d_small_wordmark_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta 3D Small Wordmark para hombre',
            gender: 'men'
        },
        {
            description: 'Diseñada para celebrar el increíble modo de rendimiento de Tesla, la camiseta Plaid Mode ofrece gran ajuste, comodidad y estilo. Confeccionada en 100% algodón, es lo más parecido a ir de copiloto en el Nürburgring.',
            images: ['1549268-00-A_0_2000.jpg', '1549268-00-A_2.jpg'],
            inStock: 82,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'men_plaid_mode_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Plaid Mode para hombre',
            gender: 'men'
        },
        {
            description: 'Inspirada en nuestra popular batería para el hogar, la camiseta Tesla Powerwall está hecha en 100% algodón y presenta la frase \'Pure Energy\' debajo de nuestro logo característico en la espalda. Diseñada para ajuste, comodidad y estilo, la camiseta promueve la energía sostenible en cualquier entorno.',
            images: ['9877034-00-A_0_2000.jpg', '9877034-00-A_2.jpg'],
            inStock: 24,
            price: 35,
            sizes: ['XL', 'XXL'],
            slug: 'men_powerwall_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Powerwall para hombre',
            gender: 'men'
        },
        {
            description: 'Inspirada en el Battery Day de Tesla y con la celda sin pestañas presentada, la camiseta Battery Day celebra el futuro del almacenamiento de energía y la fabricación de celdas. Diseñada para ajuste, comodidad y estilo, está hecha en 100% algodón con una celda estilizada impresa en el pecho. Hecha en Perú.',
            images: ['1633802-00-A_0_2000.jpg', '1633802-00-A_2.jpg'],
            inStock: 5,
            price: 30,
            sizes: ['XS', 'S', 'XXL'],
            slug: 'men_battery_day_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Battery Day para hombre',
            gender: 'men'
        },
        {
            description: 'Diseñada para comodidad y estilo inspirada en la presentación del Cybertruck, la camiseta Cybertruck Bulletproof está hecha en 100% algodón y presenta nuestro icono Cybertruck en la espalda.',
            images: ['7654399-00-A_0_2000.jpg', '7654399-00-A_1.jpg'],
            inStock: 150,
            price: 30,
            sizes: ['M', 'L'],
            slug: 'men_cybertruck_bulletproof_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Cybertruck Bulletproof para hombre',
            gender: 'men'
        },
        {
            description: 'Inspirada en el gráfico de confirmación de pedido del Model Y, la camiseta limitada Haha Yes está diseñada para comodidad y estilo. Confeccionada en 100% algodón peruano y con la palabra Tesla en el pecho, la camiseta conmemora tu pedido por años.',
            images: ['7652410-00-A_0.jpg', '7652410-00-A_1_2000.jpg'],
            inStock: 10,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'men_haha_yes_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Haha Yes para hombre (edición limitada)',
            gender: 'men'
        },
        {
            description: 'De edición limitada y diseñada para ajuste, comodidad y estilo, la camiseta S3XY está hecha en 100% algodón con el logo “S3XY” impreso en silicona 3D en el pecho. Hecha en Perú. Disponible en negro.',
            images: ['8764600-00-A_0_2000.jpg', '8764600-00-A_2.jpg'],
            inStock: 34,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L'],
            slug: 'men_s3xy_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta S3XY para hombre (edición limitada)',
            gender: 'men'
        },
        {
            description: 'Diseñada para ajuste, comodidad y estilo, la camiseta de manga larga 3D Wordmark está confeccionada en 100% algodón y presenta un discreto logotipo wordmark en el pecho izquierdo.',
            images: ['8764813-00-A_0_2000.jpg', '8764813-00-A_1.jpg'],
            inStock: 15,
            price: 40,
            sizes: ['XL', 'XXL'],
            slug: 'men_3d_wordmark_long_sleeve_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta de manga larga 3D Wordmark para hombre',
            gender: 'men'
        },
        {
            description: 'Diseñada para ajuste, comodidad y estilo, la camiseta de manga larga 3D T Logo para hombre está hecha en 100% algodón y presenta un discreto logotipo \'T\' en el pecho izquierdo.',
            images: ['8529198-00-A_0_2000.jpg', '8529198-00-A_1.jpg'],
            inStock: 12,
            price: 40,
            sizes: ['XS', 'XXL'],
            slug: 'men_3d_t_logo_long_sleeve_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta de manga larga 3D T Logo para hombre',
            gender: 'men'
        },
        {
            description: 'Presentamos la Colección Tesla Raven. La sudadera con capucha ligera Raven para hombre tiene una silueta premium y relajada hecha con una mezcla sostenible de bambú y algodón. La prenda presenta sutiles logos Tesla de poliuretano termoplástico en el pecho y en la manga, con un interior tipo french terry que aporta versatilidad en cualquier estación. Confeccionada en 70% bambú y 30% algodón.',
            images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
            inStock: 10,
            price: 115,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'men_raven_lightweight_hoodie',
            type: 'hoodies',
            tags: ['hoodie'],
            title: 'Sudadera con capucha ligera Raven para hombre',
            gender: 'men'
        },
        {
            description: 'Presentamos la Colección Tesla Chill. La sudadera Chill tipo pullover tiene un exterior premium de peso elevado y un interior de felpa suave para comodidad en cualquier estación. La sudadera unisex incluye sutiles logos Tesla de poliuretano termoplástico en el pecho y la manga, capucha de doble capa con costura única y bolsillos con tiradores de cremallera mate personalizados. Confeccionada en 60% algodón y 40% poliéster reciclado.',
            images: ['1740051-00-A_0_2000.jpg', '1740051-00-A_1.jpg'],
            inStock: 10,
            price: 130,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'chill_pullover_hoodie',
            type: 'hoodies',
            tags: ['hoodie'],
            title: 'Sudadera Chill tipo pullover (unisex)',
            gender: 'unisex'
        },
        {
            description: 'Presentamos la Colección Tesla Chill. La sudadera con cremallera completa Chill para hombre tiene un exterior premium y de peso elevado y un interior de felpa suave para comodidad en cualquier estación. La prenda incluye sutiles logos Tesla de poliuretano termoplástico en el pecho izquierdo y la manga, capucha de doble capa con costura única y bolsillos con tiradores de cremallera mate personalizados. Confeccionada en 60% algodón y 40% poliéster reciclado.',
            images: ['1741111-00-A_0_2000.jpg', '1741111-00-A_1.jpg'],
            inStock: 100,
            price: 85,
            sizes: ['XS', 'L', 'XL', 'XXL'],
            slug: 'men_chill_full_zip_hoodie',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Sudadera con capucha con cremallera completa Chill para hombre',
            gender: 'men'
        },
        {
            description: 'Presentamos la Colección Tesla Chill. El pullover Chill con media cremallera para hombre tiene un exterior premium y de peso elevado y un interior de felpa suave para comodidad en cualquier estación. El pullover presenta sutiles logos Tesla de poliuretano termoplástico en el pecho izquierdo y debajo del cuello trasero, además de un tirador de cremallera mate personalizado. Confeccionado en 60% algodón y 40% poliéster reciclado.',
            images: ['1740140-00-A_0_2000.jpg', '1740140-00-A_1.jpg'],
            inStock: 7,
            price: 85,
            sizes: ['XS', 'S', 'M'],
            slug: 'men_chill_quarter_zip_pullover_-_gray',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Pullover Chill con media cremallera para hombre — Gris',
            gender: 'men'
        },
        {
            description: 'Presentamos la Colección Tesla Chill. El pullover Chill con media cremallera para hombre tiene un exterior premium y de peso elevado y un interior de felpa suave para comodidad en cualquier estación. El pullover presenta sutiles logos Tesla de poliuretano termoplástico en el pecho izquierdo y debajo del cuello trasero, además de un tirador de cremallera mate personalizado. Confeccionado en 60% algodón y 40% poliéster reciclado.',
            images: ['1740145-00-A_2_2000.jpg', '1740145-00-A_1.jpg'],
            inStock: 15,
            price: 85,
            sizes: ['XS', 'S', 'M', 'L'],
            slug: 'men_chill_quarter_zip_pullover_-_white',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Pullover Chill con media cremallera para hombre — Blanco',
            gender: 'men'
        },
        {
            description: 'La sudadera pullover unisex 3D Large Wordmark presenta felpa suave y una capucha ajustable forrada en jersey para mayor comodidad y cobertura. Diseñada en estilo unisex, incluye una palabra en 3D de silicona tono sobre tono en el pecho.',
            images: ['8529107-00-A_0_2000.jpg', '8529107-00-A_1.jpg'],
            inStock: 15,
            price: 70,
            sizes: ['XS', 'S', 'XL', 'XXL'],
            slug: '3d_large_wordmark_pullover_hoodie',
            type: 'hoodies',
            tags: ['hoodie'],
            title: 'Sudadera pullover con gran wordmark 3D (unisex)',
            gender: 'unisex'
        },
        {
            description: 'Como el icónico logo de Tesla, la sudadera Cybertruck Graffiti está destinada a convertirse en un clásico. Estilo unisex con felpa suave y capucha ajustable forrada en jersey para una cobertura cómoda.',
            images: ['7654420-00-A_0_2000.jpg', '7654420-00-A_1_2000.jpg'],
            inStock: 13,
            price: 60,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'cybertruck_graffiti_hoodie',
            type: 'hoodies',
            tags: ['hoodie'],
            title: 'Sudadera Cybertruck Graffiti (unisex)',
            gender: 'unisex'
        },
        {
            description: 'La gorra Relaxed T Logo combina una silueta clásica con detalles modernos, presentando un logo \'T\' en 3D y un cierre de hebilla metálica personalizada. El diseño ultrasuave es flexible y resistente al desgaste, mientras que la banda interior incluye acolchado acolchado para más comodidad y absorción de sudor. La visera está hecha totalmente de botellas plásticas recicladas. 100% algodón.',
            images: ['1657932-00-A_0_2000.jpg', '1657932-00-A_1.jpg'],
            inStock: 11,
            price: 30,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'relaxed_t_logo_hat',
            type: 'hats',
            tags: ['hats'],
            title: 'Gorra Relaxed T Logo',
            gender: 'unisex'
        },
        {
            description: 'La gorra térmica presenta una silueta clásica combinada con detalles modernos, con logo \'T\' en 3D y cierre metálico personalizado. El diseño ultrasuave es flexible y resistente, y la banda interior incorpora acolchado para mayor comodidad y absorción. La visera está hecha de botellas plásticas recicladas. 100% algodón.',
            images: ['1740417-00-A_0_2000.jpg', '1740417-00-A_1.jpg'],
            inStock: 13,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'thermal_cuffed_beanie',
            type: 'hats',
            tags: ['hats'],
            title: 'Gorro térmico con puño',
            gender: 'unisex'
        },
        {
            description: 'La chaqueta puffer cropped para mujer presenta una silueta corta y moderna perfecta para combinar durante la temporada de frío. Incluye discretos logos Tesla inyectados en silicona debajo del cuello trasero y en la manga derecha, tiradores de cremallera de metal mate personalizados y un cuello forrado en felpa. Confeccionada en 87% nylon y 13% poliuretano.',
            images: ['1740535-00-A_0_2000.jpg', '1740535-00-A_1.jpg'],
            inStock: 85,
            price: 225,
            sizes: ['XS', 'S', 'M'],
            slug: 'women_cropped_puffer_jacket',
            type: 'hoodies',
            tags: ['hoodie'],
            title: 'Chaqueta puffer cropped para mujer',
            gender: 'women'
        },
        {
            description: 'Presentamos la Colección Tesla Chill. La sudadera cropped Chill para mujer tiene un exterior de felpa premium y una silueta corta para comodidad en el día a día. La prenda cuenta con un dobladillo elástico que se ajusta en la cintura, sutiles logos Tesla de poliuretano termoplástico a lo largo de la capucha y en la manga, capucha de doble capa con costura única y un tirador de cremallera tipo ring-3 personalizado. Confeccionada en 60% algodón y 40% poliéster reciclado.',
            images: ['1740226-00-A_0_2000.jpg', '1740226-00-A_1.jpg'],
            inStock: 10,
            price: 130,
            sizes: ['XS', 'S', 'M', 'XXL'],
            slug: 'women_chill_half_zip_cropped_hoodie',
            type: 'hoodies',
            tags: ['hoodie'],
            title: 'Sudadera cropped Chill con media cremallera para mujer',
            gender: 'women'
        },
        {
            description: 'Presentamos la Colección Tesla Raven. La sudadera slouchy Raven para mujer tiene una silueta relajada y premium hecha con una mezcla sostenible de bambú y algodón. El slouchy crew incluye una marca Tesla de poliuretano termoplástico en la manga izquierda y un interior tipo french terry para un tacto acogedor en todas las estaciones. Combínala con los joggers Raven o tu conjunto favorito. Confeccionada en 70% bambú y 30% algodón.',
            images: ['1740260-00-A_0_2000.jpg', '1740260-00-A_1.jpg'],
            inStock: 9,
            price: 110,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'women_raven_slouchy_crew_sweatshirt',
            type: 'hoodies',
            tags: ['hoodie'],
            title: 'Sudadera slouchy Raven para mujer',
            gender: 'women'
        },
        {
            description: 'Presentamos la Colección Tesla Turbine. Diseñada para estilo, comodidad y uso cotidiano, la camiseta cropped de manga larga para mujer presenta la palabra Tesla a base de agua en el pecho y el logotipo \'T\' debajo del cuello trasero. El material ligero está teñido dos veces, creando un estilo suave y casual con una silueta cropped. Confeccionada en 50% algodón y 50% poliéster.',
            images: ['1740290-00-A_0_2000.jpg', '1740290-00-A_1.jpg'],
            inStock: 10,
            price: 45,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'women_turbine_cropped_long_sleeve_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta cropped de manga larga Turbine para mujer',
            gender: 'women'
        },
        {
            description: 'Presentamos la Colección Tesla Turbine. Diseñada para estilo, comodidad y uso diario, la camiseta cropped de manga corta para mujer incluye la palabra Tesla a base de agua en el pecho y nuestro logotipo \'T\' debajo del cuello trasero. El material ligero está teñido dos veces y crea un estilo suave y casual con silueta cropped. Confeccionada en 50% algodón y 50% poliéster.',
            images: ['1741441-00-A_0_2000.jpg', '1741441-00-A_1.jpg'],
            inStock: 0,
            price: 40,
            sizes: ['XS', 'S'],
            slug: 'women_turbine_cropped_short_sleeve_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta cropped de manga corta Turbine para mujer',
            gender: 'women'
        },
        {
            description: 'Diseñada para estilo y comodidad, la camiseta ultrasuave de cuello scoop con logo \'T\' para mujer presenta un pequeño logotipo \'T\' impreso en silicona tono sobre tono en el pecho izquierdo. Confeccionada en 50% algodón peruano y 50% viscosa peruana.',
            images: ['8765090-00-A_0_2000.jpg', '8765090-00-A_1.jpg'],
            inStock: 30,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'women_t_logo_short_sleeve_scoop_neck_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta scoop neck T Logo para mujer',
            gender: 'women'
        },
        {
            description: 'Diseñada para estilo y comodidad, la camiseta ultrasuave de manga larga con logo \'T\' presenta un logotipo \'T\' en silicona tono sobre tono en el pecho izquierdo. Confeccionada en 50% algodón peruano y 50% viscosa peruana.',
            images: ['8765100-00-A_0_2000.jpg', '8765100-00-A_1.jpg'],
            inStock: 16,
            price: 40,
            sizes: ['XS', 'S', 'L', 'XL', 'XXL'],
            slug: 'women_t_logo_long_sleeve_scoop_neck_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta de manga larga scoop neck T Logo para mujer',
            gender: 'women'
        },
        {
            description: 'Diseñada para estilo y comodidad, la camiseta V-neck con small wordmark para mujer presenta una palabra tonal impresa en silicona 3D en el pecho izquierdo. Confeccionada en 100% algodón peruano.',
            images: ['8765120-00-A_0_2000.jpg', '8765120-00-A_1.jpg'],
            inStock: 18,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'women_small_wordmark_short_sleeve_v-neck_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta V-neck con small wordmark para mujer',
            gender: 'women'
        },
        {
            description: 'Diseñada para estilo y comodidad, la camiseta crew neck con large wordmark para mujer presenta una marca tonal impresa en silicona 3D a lo largo del pecho. Confeccionada en 100% algodón pima peruano.',
            images: ['8765115-00-A_0_2000.jpg', '8765115-00-A_1.jpg'],
            inStock: 5,
            price: 35,
            sizes: ['XL', 'XXL'],
            slug: 'women_large_wordmark_short_sleeve_crew_neck_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta crew neck con large wordmark para mujer',
            gender: 'women'
        },
        {
            description: 'Diseñada para celebrar el increíble modo de rendimiento de Tesla, la camiseta Plaid Mode ofrece gran ajuste, comodidad y estilo. Confeccionada en 100% algodón, es lo más parecido a ir de copiloto en el Nürburgring.',
            images: ['1549275-00-A_0_2000.jpg', '1549275-00-A_1.jpg'],
            inStock: 16,
            price: 35,
            sizes: ['S', 'M'],
            slug: 'women_plaid_mode_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Plaid Mode para mujer',
            gender: 'women'
        },
        {
            description: 'Inspirada en nuestra popular batería para el hogar, la camiseta Tesla Powerwall está hecha en 100% algodón y presenta la frase \'Pure Energy\' debajo de nuestro logo característico en la espalda. Diseñada para ajuste, comodidad y estilo, la exclusiva camiseta promueve la energía sostenible en cualquier entorno.',
            images: ['9877040-00-A_0_2000.jpg', '9877040-00-A_1.jpg'],
            inStock: 10,
            price: 130,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'women_powerwall_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Powerwall para mujer',
            gender: 'women'
        },
        {
            description: 'Totalmente personalizada y con estilo único, la chaqueta Women\'s Corp presenta un logo \'T\' impreso en silicona en el pecho izquierdo y una prominente palabra Tesla en la espalda.',
            images: ['5645680-00-A_0_2000.jpg', '5645680-00-A_3.jpg'],
            inStock: 3,
            price: 90,
            sizes: ['M', 'L', 'XL', 'XXL'],
            slug: 'women_corp_jacket',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Chaqueta Corp para mujer',
            gender: 'women'
        },
        {
            description: 'Presentamos la Colección Tesla Raven. Los joggers Raven para mujer tienen una silueta relajada y premium hechos con una mezcla sostenible de bambú y algodón. Los joggers incluyen un sutil wordmark y logotipo \'T\' de poliuretano termoplástico y un interior tipo french terry para un look y tacto acogedores en cualquier estación. Combínalos con la sudadera Raven Slouchy Crew o la bomber Raven Lightweight Zip Up. Confeccionados en 70% bambú y 30% algodón.',
            images: ['1740270-00-A_0_2000.jpg', '1740270-00-A_1.jpg'],
            inStock: 162,
            price: 100,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: 'women_raven_joggers',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Joggers Raven para mujer',
            gender: 'women'
        },
        {
            description: 'Diseñada para ajuste, comodidad y estilo, la camiseta de manga larga Cybertruck para niños presenta una palabra Cybertruck estilo graffiti a base de agua en el pecho, la palabra Tesla en el brazo izquierdo y nuestro logotipo \'T\' en el cuello trasero. Confeccionada en 50% algodón y 50% poliéster.',
            images: ['1742694-00-A_1_2000.jpg', '1742694-00-A_3.jpg'],
            inStock: 10,
            price: 30,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_cybertruck_long_sleeve_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta de manga larga Cybertruck para niños',
            gender: 'kid'
        },
        {
            description: 'La camiseta Kids Scribble T Logo está hecha en 100% algodón peruano y presenta un logo Tesla dibujado a mano para que todo joven artista lo luzca.',
            images: ['8529312-00-A_0_2000.jpg', '8529312-00-A_1.jpg'],
            inStock: 0,
            price: 25,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_scribble_t_logo_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Kids Scribble T Logo',
            gender: 'kid'
        },
        {
            description: 'La camiseta Kids Cybertruck presenta la icónica palabra Cybertruck en estilo graffiti y está confeccionada en 100% algodón peruano para máxima comodidad.',
            images: ['8529342-00-A_0_2000.jpg', '8529342-00-A_1.jpg'],
            inStock: 10,
            price: 25,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_cybertruck_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Cybertruck para niños',
            gender: 'kid'
        },
        {
            description: 'La renovada camiseta Kids Racing Stripe está hecha en 100% algodón peruano, con una franja de carreras mejorada y una palabra Tesla cepillada; perfecta para cualquier pequeño amante de la velocidad.',
            images: ['8529354-00-A_0_2000.jpg', '8529354-00-A_1.jpg'],
            inStock: 10,
            price: 30,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_racing_stripe_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta Racing Stripe para niños',
            gender: 'kid'
        },
        {
            description: 'Diseñada para ajuste, comodidad y estilo, la camiseta Tesla T Logo para niños está hecha en 100% algodón peruano y presenta un logotipo \'T\' impreso en silicona.',
            images: ['7652465-00-A_0_2000.jpg', '7652465-00-A_1.jpg'],
            inStock: 10,
            price: 30,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_3d_t_logo_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta 3D T Logo para niños',
            gender: 'kid'
        },
        {
            description: 'La camiseta checkered está hecha con algodón peruano de grano largo y sin OGM. Perú es el único país donde el algodón se recoge a mano a gran escala; esta tradición milenaria evita dañar la fibra y reduce la necesidad de químicos antes de la cosecha. Este proceso respetuoso con el medio ambiente produce un algodón suave, resistente y lustroso — la prenda se volverá aún más suave con cada lavado.',
            images: ['100042307_0_2000.jpg', '100042307_alt_2000.jpg'],
            inStock: 10,
            price: 30,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_checkered_tee',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Camiseta checkered para niños',
            gender: 'kid'
        },
        {
            description: 'Para el futuro viajero espacial con buen gusto: un pelele suave de algodón con cierre de presión en la parte inferior. Etiquetado claro en caso de contacto con una nueva civilización espacial. 100% algodón. Hecho en Perú',
            images: ['1473809-00-A_1_2000.jpg', '1473809-00-A_alt.jpg'],
            inStock: 16,
            price: 25,
            sizes: ['XS', 'S'],
            slug: 'made_on_earth_by_humans_onesie',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Pelele Made on Earth by Humans',
            gender: 'kid'
        },
        {
            description: 'El pelele Kids Scribble T Logo está hecho en 100% algodón peruano y presenta un logo Tesla dibujado para que los pequeños artistas lo luzcan.',
            images: ['8529387-00-A_0_2000.jpg', '8529387-00-A_1.jpg'],
            inStock: 0,
            price: 30,
            sizes: ['XS', 'S'],
            slug: 'scribble_t_logo_onesie',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Pelele Scribble T Logo',
            gender: 'kid'
        },
        {
            description: 'Muestra tu compromiso con la energía sostenible con este gracioso pelele para los más pequeños. Nota: no previene emisiones. 100% algodón. Hecho en Perú.',
            images: ['1473834-00-A_2_2000.jpg', '1473829-00-A_2_2000.jpg'],
            inStock: 10,
            price: 30,
            sizes: ['XS', 'S'],
            slug: 'zero_emissions_(almost)_onesie',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Pelele Zero Emissions (Almost)',
            gender: 'kid'
        },
        {
            description: 'Lleva tu Kids Cyberquad Bomber Jacket durante las aventuras en el Cyberquad para niños. La bomber incluye una ilustración estilo graffiti de nuestra silueta Cyberquad y palabra; con tres bolsillos con cremallera y nuestro logo \'T\' y la palabra Tesla impresos en las mangas, es perfecta para cualquier excursión. Confeccionada en 60% algodón y 40% poliéster.',
            images: ['1742702-00-A_0_2000.jpg', '1742702-00-A_1.jpg'],
            inStock: 10,
            price: 65,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_cyberquad_bomber_jacket',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Bomber Cyberquad para niños',
            gender: 'kid'
        },
        {
            description: 'Pasea por el patio con estilo gracias a la Kids Corp Jacket. Inspirada en la chaqueta Tesla Corp original, presenta el mismo estilo discreto y materiales de alta calidad a escala infantil.',
            images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
            inStock: 10,
            price: 30,
            sizes: ['XS', 'S', 'M'],
            slug: 'kids_corp_jacket',
            type: 'shirts',
            tags: ['shirt'],
            title: 'Chaqueta Corp para niños',
            gender: 'kid'
        }
    ]
}