document.addEventListener('DOMContentLoaded', () => {

    const components = [
        { id: 1, name: 'Quantum Chip "Helios-Q7"', description: '72-qubit universal quantum processor for complex cryptographic and simulation tasks.', classification: 'ZETA-9', price: 45000000, image: 'https://media.techeblog.com/images/google-quantum-supremacy.jpg' },
        { id: 2, name: 'Ion Propulsion Engine Mk.IV', description: 'High-efficiency gridded ion thruster. Isp: 19,300 s. Ideal for interplanetary missions.', classification: 'GAMMA-7', price: 2200000, image: 'https://cdn.mos.cms.futurecdn.net/9T4qTFYE9EbYhyYmKgrGoL.jpg' },
        { id: 3, name: 'Room-Temp Superconductor (LK-99+)', description: '100kg Lead-apatite derivative material exhibiting superconductivity at standard pressure and temperature.', classification: 'OMEGA-1', price: 12000000, image: 'https://spectrum.ieee.org/media-library/less-than-p-greater-than-magnets-are-seen-here-suspended-above-a-track-in-a-superconductivity-demonstration-kit-in-a-lab-at-the-university-of-rochester-less-than-p-greater-than.jpg?id=33229050' },
        { id: 4, name: 'Graphene Monolayer (100m² Roll)', description: 'Atom-thick, high-purity CVD graphene sheet for advanced material science applications.', classification: 'DELTA-4', price: 9800000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QCmh5qCxOYV2H7B0yNqm8KKOkdzdfQefbg&s' },
        { id: 5, name: 'Helium-3 Isotope (250g)', description: 'Refined He-3 isotope for aneutronic fusion research and advanced sensor development.', classification: 'ZETA-9', price: 15000000, image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Angeregtes_Helium_3.jpg' },
        { id: 6, name: 'Fusion Reactor Toroidal Magnet', description: 'High-temperature superconducting (HTS) magnet for tokamak plasma confinement.', classification: 'OMEGA-1', price: 2000000000, image: 'https://cds.cern.ch/images/CERN-EX-0511013-02/file?size=large' },
        { id: 7, name: 'Tritium Isotope (Sealed Vial)', description: 'Beta-decaying hydrogen isotope for fusion fuel and self-powered illumination systems.', classification: 'GAMMA-7', price: 3000000, image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tritium-Glowring_-_320s.jpg' },
        { id: 8, name: 'Photonic Computer Core', description: 'Optical processing unit that computes using photons, offering near-zero latency.', classification: 'OMEGA-1', price: 100000000, image: 'https://opn-web-afd-d3bfbkd5bcc5asbs.z02.azurefd.net/opn/media/images/articles/2023/0123/features/cartlidge-img2.jpg?t=638442939694452537' },
        { id: 9, name: 'Humanoid Robot Chassis Mk-13', description: '1000 units of Advanced bipedal robotic platform with neural-link interface compatibility. (Actuators sold separately).', classification: 'DELTA-4', price: 450000000, image: 'https://img.freepik.com/premium-photo/line-white-humanoid-robots-stand-futuristic-factory-setting_1022970-58745.jpg' },
        { id: 10, name: 'Cybernetic Neural Interface', description: 'Direct, high-bandwidth data transfer between a biological brain and a digital system for advanced robotics piloting.', classification: 'ZETA-9', price: 125000000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uqcOz4KI0I70CfXu1HmOl0UZNJx5dGBCnA&s' },
        { id: 11, name: 'BioForge Synthetic DNA Printer', description: 'Automated molecular forge for printing custom DNA sequences, creating synthetic organisms, Vaccines, Drugs or advanced biofuels.', classification: 'GAMMA-7', price: 800000000, image: 'https://imageio.forbes.com/specials-images/imageserve/637c98e9f08a26eb1d1a9f18/BioXp--9600-system/960x0.jpg?format=jpg&width=960' },
        { id: 12, name: 'Sentient AI Core (Model: Prometheus)', description: 'A self-aware, general AI contained in a closed-system quantum matrix. Ethical use waivers are mandatory.', classification: 'OMEGA-1', price: 5000000000, image: 'https://www.amd.com/content/dam/amd/en/images/products/1569197-enterprise-storage.jpg' },
        { id: 13, name: 'Predictive Analytics Engine "Cassandra"', description: 'Runs trillions of future-state simulations to provide highly accurate predictive models for any outcome.', classification: 'OMEGA-1', price: 1800000000, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71' },
        { id: 14, name: 'Self-Replicating Nanite Swarm', description: 'Programmable microscopic robots capable of forming solid structures or disassembling matter at an atomic level.', classification: 'DELTA-4', price: 750000000, image: 'https://www.bitsathy.ac.in/wp-content/uploads/Vaidhyanathan-FI.jpg' },
        { id: 15, name: 'Exotic Matter Containment Unit', description: 'A portable magnetic bottle for safely storing and transporting antimatter or other unstable, high-energy particles.', classification: 'ZETA-9', price: 320000000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQsecFOqddYwBQaPWov07PR8cq52MCOj3ig&s' },
        { id: 16, name: 'Dark Matter Sample (Sealed Vial)', description: 'A small quantity (1g) of dark matter for experimental physics research. Handle with extreme caution.', classification: 'ZETA-9', price: 50000000000, image: 'https://www.thebrighterside.news/uploads/2024/08/expensive-substance-1-e1731789009447.webp?format=webp&optimize=high&precrop=1%3A1%2Csmart' },
        { id: 17, name: 'Space Staion Module', description: 'A modular Rotating unit for long-duration space missions, complete with life support and radiation shielding.', classification: 'GAMMA-7', price: 75000000, image: 'https://geekculture.co/wp-content/uploads/2019/09/von-braun-rotating-space-station-featured-1.jpg' },
        { id: 18, name: 'Space-Grade Solar Panel Array', description: 'High-efficiency photovoltaic panels designed for optimal energy capture in space environments.', classification: 'GAMMA-7', price: 12000000, image: 'https://png.pngtree.com/background/20250120/original/pngtree-massive-solar-power-array-in-space-absorbing-energy-from-the-sun-picture-image_16094009.jpg' },
        { id: 19, name: 'Interplanetary Transport Shuttle', description: 'A compact shuttle designed for short trips between planetary bodies within a solar system.', classification: 'DELTA-4', price: 2000000000, image: 'https://i.redd.it/xi6p4fdeqak41.png' },
        { id: 20, name: 'Microgravity Research Lab Kit', description: 'Portable lab setup for conducting experiments in microgravity conditions aboard spacecraft.', classification: 'DELTA-4', price: 50000000, image: 'https://issnationallab.org/wp-content/uploads/2024/09/34107-2-1.jpg' },
        { id: 21, name: 'Astro-Mining Drone', description: 'Autonomous drone for extracting minerals from asteroids and other celestial bodies.', classification: 'DELTA-4', price: 250000000, image: 'https://i.redd.it/gqq5yuvqfc381.png' },
        { id: 22, name: 'Cryogenic Freezer Unit', description: 'High-capacity freezer for preserving biological samples and food in space.', classification: 'GAMMA-7', price: 8000000, image: 'https://preview.free3d.com/img/2015/04/2188238050214020583/qgpoyzg9.jpg' },
        { id: 23, name: 'Radiation Shielding Blanket', description: 'Lightweight, flexible blanket for protecting against cosmic radiation.', classification: 'ZETA-9', price: 20000000, image: 'https://spinoff.nasa.gov/sites/default/files/2020-08/CG_12_web_0.jpg' },
        { id: 24, name: 'Hydroponic Growth System', description: 'Compact system for growing plants in space using nutrient-rich water solutions.', classification: 'DELTA-4', price: 60000000, image: 'https://preview.redd.it/i-converted-this-space-from-my-living-room-7-towers-4-racks-v0-2grqcb5u26bd1.jpeg?width=640&crop=smart&auto=webp&s=a97f849b5ff861f93826a053bac35145613ab6a4' },
        { id: 25, name: 'Space Habitat Module', description: 'Inflatable living quarters for astronauts on long-duration missions.', classification: 'GAMMA-7', price: 60000000, image: 'https://cdn.mos.cms.futurecdn.net/AwWqGdLrXKAg5dnFdPCrWW.jpg' },
        { id: 26, name: "Orbital Railgun", description: "Electromagnetic launch system for sending payloads into orbit without traditional rockets.", classification: "OMEGA-1", price: 3000000000, image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Lunar_base_concept_drawing_s78_23252.jpg' },
        { id: 27, name: "Space Elevator Tether Segment", description: "High-strength carbon nanotube segment for constructing a space elevator.", classification: "OMEGA-1", price: 10000000000, image: 'https://images.squarespace-cdn.com/content/v1/5e35af40fb280744e1b16f7b/1591368571366-HE3HKUHDR23DD7CMTH5M/ScreenShot_20200605145240.png?format=1000w' },
        { id: 28, name: 'Advanced Spacesuit (Model: Aegis-X)', description: 'Next-gen spacesuit with enhanced mobility, radiation protection, and life support for deep space exploration.', classification: 'ZETA-9', price: 12000000, image: 'https://i0.wp.com/scifiinterfaces.com/wp-content/uploads/2021/08/the-expanse-spacesuit-Iceplanet.jpg?resize=545%2C363&ssl=1' },
        { id: 29, name: 'Interstellar Communication Beacon', description: 'Long-range communication device for sending and receiving signals across interstellar distances.', classification: 'OMEGA-1', price: 500000000, image: 'https://i.redd.it/3ckv0wp2es251.png' },
        { id: 30, name: 'Planetary Defense Constillation', description: 'Network of satellites equipped with sensors and deflection technology to protect Earth from asteroids and other threats.', classification: 'OMEGA-1', price: 5000000000000, image: 'https://www.etbrooking.com/wp-content/uploads/2015/01/codghostsspace2.jpg' }
    ];

    // --- State Management ---
    let procurementList = JSON.parse(localStorage.getItem('procurementList')) || [];

    const saveList = () => {
        localStorage.setItem('procurementList', JSON.stringify(procurementList));
    };

    const usdFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    // --- Universal UI Functions ---
    const updateProcurementCount = () => {
        const countElement = document.getElementById('procurement-count');
        if (countElement) {
            const totalQuantity = procurementList.reduce((total, item) => total + item.quantity, 0);
            countElement.textContent = totalQuantity;
        }
    };

    const showNotification = (message) => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    };

    // --- RENDER FUNCTIONS ---

    const renderComponentCatalogue = (componentsToRender) => {
        const grid = document.getElementById('component-grid');
        if (!grid) return;

        const listIds = procurementList.map(item => item.id);

        grid.innerHTML = componentsToRender.map(comp => {
            const isInList = listIds.includes(comp.id);
            const buttonClass = isInList ? 'procurement-btn added' : 'procurement-btn';
            const buttonText = isInList ? '✓ Added' : 'Initiate Procurement';
            const buttonDisabled = isInList ? 'disabled' : '';

            return `
            <div class="component-card">
                <div class="card-image-container">
                    <img src="${comp.image}" alt="${comp.name}" class="card-image">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${comp.name}</h3>
                        <span class="classification-tag">${comp.classification}</span>
                    </div>
                    <p class="card-description">${comp.description}</p>
                    <div class="card-footer">
                        <span class="price-tag">${usdFormatter.format(comp.price)}</span>
                        <button class="${buttonClass}" data-action="add" data-id="${comp.id}" ${buttonDisabled}>
                            ${buttonText}
                        </button>
                    </div>
                </div>
            </div>`;
        }).join('');
    };

    const renderRequestPage = () => {
        const container = document.getElementById('request-list-container');
        const totalContainer = document.getElementById('total-cost-container');
        if (!container) return;

        if (procurementList.length === 0) {
            container.innerHTML = '<p style="text-align: center;">Your procurement list is empty. Return to the catalogue to select components.</p>';
            totalContainer.innerHTML = '';
            document.getElementById('empty-list-btn').style.display = 'none';
            return;
        }
        
        document.getElementById('empty-list-btn').style.display = 'block';
        let totalCost = 0;
        container.innerHTML = procurementList.map(item => {
            totalCost += item.price * item.quantity;
            return `
            <div class="request-list-item">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <span class="price-tag">${usdFormatter.format(item.price)} x ${item.quantity} = ${usdFormatter.format(item.price * item.quantity)}</span>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
                <button class="procurement-btn remove-btn" data-action="remove" data-id="${item.id}">
                    Remove
                </button>
            </div>`;
        }).join('');
        
        totalContainer.innerHTML = `
            <h3 style="font-size: 1.8rem; color: var(--text-highlight);">Total Estimated Cost: 
                <span style="color: var(--primary-glow);">${usdFormatter.format(totalCost)}</span>
            </h3>`;
    };

    // --- EVENT HANDLERS & LOGIC ---

    const handleCatalogueClick = (e) => {
        const target = e.target.closest('[data-action="add"]');
        if (!target) return;

        const id = parseInt(target.dataset.id);
        const existingItem = procurementList.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const component = components.find(c => c.id === id);
            procurementList.push({ ...component, quantity: 1 });
        }
        
        saveList();
        updateProcurementCount();
        showNotification(`${components.find(c => c.id === id).name} added to list.`);
        target.textContent = '✓ Added';
        target.classList.add('added');
        target.disabled = true;
    };

    const handleRequestListClick = (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        const action = target.dataset.action;
        const id = parseInt(target.dataset.id);
        const item = procurementList.find(item => item.id === id);
        
        if (!item) return;

        switch(action) {
            case 'increase':
                item.quantity++;
                break;
            case 'decrease':
                item.quantity--;
                if (item.quantity <= 0) {
                    procurementList = procurementList.filter(i => i.id !== id);
                }
                break;
            case 'remove':
                procurementList = procurementList.filter(i => i.id !== id);
                break;
        }
        
        saveList();
        updateProcurementCount();
        renderRequestPage();
        // We need to re-render the catalogue if the user goes back to it
        if(document.getElementById('component-grid')) applyFiltersAndSort();
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (procurementList.length === 0) {
            showNotification('Error: No components in list to procure.');
            return;
        }
        showNotification('Secure request transmitted. A representative will contact you via the provided channel.');
        procurementList = [];
        saveList();
        updateProcurementCount();
        e.target.reset();
        renderRequestPage();
        if(document.getElementById('component-grid')) applyFiltersAndSort();
    };
    
    const applyFiltersAndSort = () => {
        const filterValue = document.querySelector('.filter-btn.active').dataset.filter;
        const sortValue = document.getElementById('sort-select').value;
        
        let filtered = [...components];
        if (filterValue !== 'ALL') {
            filtered = components.filter(c => c.classification === filterValue);
        }

        switch (sortValue) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
        }
        
        renderComponentCatalogue(filtered);
    };

    // --- INITIALIZATION ---

    // Page-specific setup
    if (document.getElementById('component-grid')) {
        // Catalogue Page
        document.querySelector('.controls-container').addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                applyFiltersAndSort();
            }
        });
        document.getElementById('sort-select').addEventListener('change', applyFiltersAndSort);
        document.getElementById('component-grid').addEventListener('click', handleCatalogueClick);
        applyFiltersAndSort();
    }
    
    if (document.getElementById('request-list-container')) {
        // Request Page
        document.getElementById('request-list-container').addEventListener('click', handleRequestListClick);
        document.getElementById('empty-list-btn').addEventListener('click', () => {
             procurementList = [];
             saveList();
             updateProcurementCount();
             renderRequestPage();
             if(document.getElementById('component-grid')) applyFiltersAndSort();
        });
        document.getElementById('request-form').addEventListener('submit', handleFormSubmit);
        renderRequestPage();
    }

    updateProcurementCount();
});
    const scrollers = document.querySelectorAll(".scroller");

    if (scrollers.length > 0) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.cloneNode(true);
            scroller.parentNode.insertBefore(scrollerInner, scroller.nextSibling);
        });
    }