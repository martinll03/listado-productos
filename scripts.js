document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { image: './resources/c1.png', description: 'Carne de Res', category: 'Carnes', price: 'Q110', origin: 'Argentina', quality: 'Alta' },
        { image: './resources/c2.png', description: 'Carne de Cerdo', category: 'Carnes', price: 'Q115', origin: 'España', quality: 'Media' },
        { image: './resources/c3.png', description: 'Carne de Pollo', category: 'Carnes', price: 'Q130', origin: 'Brasil', quality: 'Media' },
        { image: './resources/c5.png', description: 'Carne de Pato', category: 'Carnes', price: 'Q135', origin: 'China', quality: 'Media' },
        { image: './resources/c4.png', description: 'Carne de Cordero', category: 'Carnes', price: 'Q118', origin: 'Nueva Zelanda', quality: 'Alta' },
        { image: './resources/c6.png', description: 'Carne de Caballo', category: 'Carnes', price: 'Q116', origin: 'Japón', quality: 'Media' },
        { image: './resources/c7.png', description: 'Carne de Venado', category: 'Carnes', price: 'Q114', origin: 'Canadá', quality: 'Alta' },
        { image: './resources/c8.png', description: 'Carne de Pavo', category: 'Carnes', price: 'Q133', origin: 'Estados Unidos', quality: 'Media' },
        { image: './resources/c9.png', description: 'Carne de Conejo', category: 'Carnes', price: 'Q129', origin: 'Italia', quality: 'Media' },
        { image: './resources/c10.png', description: 'Carne de Codorniz', category: 'Carnes', price: 'Q121', origin: 'España', quality: 'Alta' },
        
        { image: './resources/c19.png', description: 'Vino Tinto', category: 'Bebidas', price: 'Q120', origin: 'Francia', quality: 'Premium' },
        { image: './resources/c17.png', description: 'Cerveza', category: 'Bebidas', price: 'Q125', origin: 'Alemania', quality: 'Alta' },
        { image: './resources/c13.png', description: 'Whisky', category: 'Bebidas', price: 'Q112', origin: 'Escocia', quality: 'Premium' },
        { image: './resources/c14.png', description: 'Tequila', category: 'Bebidas', price: 'Q122', origin: 'México', quality: 'Alta' },
        { image: './resources/c11.png', description: 'Ron', category: 'Bebidas', price: 'Q128', origin: 'Cuba', quality: 'Alta' },
        { image: './resources/c20.png', description: 'Vodka', category: 'Bebidas', price: 'Q119', origin: 'Rusia', quality: 'Premium' },
        { image: './resources/c12.png', description: 'Cognac', category: 'Bebidas', price: 'Q140', origin: 'Francia', quality: 'Premium' },
        { image: './resources/c18.png', description: 'Gin', category: 'Bebidas', price: 'Q127', origin: 'Reino Unido', quality: 'Alta' },
        { image: './resources/c15.png', description: 'Champán', category: 'Bebidas', price: 'Q124', origin: 'Francia', quality: 'Premium' },
        { image: './resources/c16.png', description: 'Sidra', category: 'Bebidas', price: 'Q117', origin: 'Reino Unido', quality: 'Media' },
    ];

    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('search');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');
    const modalPrice = document.getElementById('modal-price');
    const modalOrigin = document.getElementById('modal-origin');
    const modalQuality = document.getElementById('modal-quality');
    const closeModal = document.getElementsByClassName('close')[0];

    const renderProducts = (filteredProducts) => {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;

            const productDescription = document.createElement('h3');
            productDescription.textContent = product.description;

            const productCategory = document.createElement('p');
            productCategory.textContent = `Categoría: ${product.category}`;

            const productPrice = document.createElement('p');
            productPrice.classList.add('price');
            productPrice.textContent = product.price;

            productCard.appendChild(productImage);
            productCard.appendChild(productDescription);
            productCard.appendChild(productCategory);
            productCard.appendChild(productPrice);

            productCard.addEventListener('click', () => {
                modal.style.display = 'block';
                modalTitle.textContent = product.description;
                modalImage.src = product.image;
                modalDescription.textContent = `Descripción: ${product.description}`;
                modalCategory.textContent = `Categoría: ${product.category}`;
                modalPrice.textContent = `Precio: ${product.price}`;
                modalOrigin.textContent = `Origen: ${product.origin}`;
                modalQuality.textContent = `Calidad: ${product.quality}`;
            });

            productList.appendChild(productCard);
        });
    };

    renderProducts(products);

    searchInput.addEventListener('input', (event) => {
        const searchQuery = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product => {
            return (
                product.description.toLowerCase().includes(searchQuery) ||
                product.category.toLowerCase().includes(searchQuery) ||
                product.price.toLowerCase().includes(searchQuery)
            );
        });
        renderProducts(filteredProducts);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
