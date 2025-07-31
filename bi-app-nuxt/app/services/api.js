const mockData = [
    {
        id: 1,
        name: "Regular Fit Stripe Wicking Polo",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW04387_DW5_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 1000,
    },
    {
        id: 2,
        name: "Embroidered Tommy Logo T-Shirt\n",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/78J6318_P8F_alternate1?wid=428&hei=564&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 2300,
    },
    {
        id: 3,
        name: "Patch Pocket Classic 5\" Short\n",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW05230_8KB_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 1020,
    },
    {
        id: 4,
        name: "Everyday T-Shirt",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW05857_1AA_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 10110,
    },
    {
        id: 5,
        name: "Short-Sleeve Gold-Button Dress\n",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XW04356_YBL_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 30000,
    },
    {
        id: 6,
        name: "Belted Chambray Midi Shirtdress\n",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/78J9397_YBR_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 11100,
    },
    {
        id: 7,
        name: "High-Rise Classic Straight Jean\n",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/78JA560_100_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 1300,
    },
    {
        id: 8,
        name: "Cable Knit Cardigan\n",
        imageURL: "https://shoptommy.scene7.com/is/image/ShopTommy/XM04543_L8Q_main?wid=1487&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
        imageAlt: "",
        price: 42300,
    },
]

function simulateDelay(data, delay = 300) {
    return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

export const getAllProducts = async () => {
    return simulateDelay(mockData);
};

export const getProduct = async (id) => {
    const product = mockData.find((p) => p.id === Number(id));

    if (!product) {
        throw new Error(`Product with ID ${id} not found`);
    }

    return simulateDelay(product);
};

