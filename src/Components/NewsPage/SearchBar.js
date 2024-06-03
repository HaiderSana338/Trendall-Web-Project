import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getArticleHeadings } from './Information';

const articleHeadings = getArticleHeadings();

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const name = [
        "Archaeology", "Artifact", "Anthropology", "Antiquity", "Analysis", "Ancient", "Anthropologist", "Archaeologist", "Excavation", "Archaeological site", "Anthropomorphic", "Archaeometry", "Archaeobotany", "Archaeozoology", "Ancient civilization",
        "Burial", "Bronze Age", "Bone", "Biface", "Bison", "Burial mound", "Burial site", "Beaker culture", "Bioarchaeology", "Bronze artifact", "Burial practice", "Bell Beaker", "Burial goods", "Bronze tool", "Boundary marker",
        "Ceramic", "Cave", "Civilization", "Culture", "Cuneiform", "Carbon dating", "Chariot", "Chamber tomb", "Cairn", "Clay", "City", "Cremation", "Chronology", "Copper", "Codex", "Chisel", "Clovis culture", "Cairn", "Crypt", "Crucible", "Conservation", "Colonization", "Chalcolithic", "Chambered tomb", "Cave painting", "Cultural heritage", "Cultivation", "Ceremonial", "Cave dwelling", "Cultural exchange",
        "Dating", "Dig", "Dendrochronology", "Depiction", "Deposition", "Deity", "Discovery", "Drainage", "Dynasty", "Decorated", "Drawings", "Dolmen", "Diet", "Dirt", "Dolomite", "Demography", "Dwellings", "Dynastic", "Documentation", "Development",
        "Egyptology", "Excavation", "Expedition", "Exhibit", "Exposure", "Ethnography", "Ethnology", "Epigraphy", "Erosion", "Experimental archaeology", "Engraving", "Ethnicity", "Exchange", "Etymology", "Earthenware", "Edifice", "Evidence", "Erosion control", "Egalitarian society", "Epistolary evidence",
        "Fossil", "Flint", "Farming", "Fieldwork", "Finds", "Funerary", "Funeral", "Fauna", "Feature", "Faience", "Fibula", "Fragment", "Fire pit", "Fortification", "Fresco", "Footprint", "Furnace", "Forgery", "Fossilization", "Fluvial",
        "Graffiti", "Glyph", "Goddess", "Geology", "Genealogy", "Garrison", "Glassware", "Goldsmith", "Grave", "Grave goods", "Grave marker", "Groove", "Granite", "Guild", "Gypsum", "Galley", "Gatehouse", "Garrison town", "Gabled roof", "Geochronology",
        "Hieroglyphics", "Hominid", "Hominin", "Habitat", "Harpoon", "Hearth", "Hoard", "Horn", "Hunting", "Hut", "Hydration", "Hybridization", "Hypothesis", "Hypogeum", "Henge", "Hematite", "Haplogroup", "Hillfort", "Hoarder", "Hellenistic",
        "Industry","Inscription","Iron Age","Iconography","Inhumation","Intaglio","Isotope analysis","Inca","Ivory",
        "Jar","Jewellery","Jade","Joust","Journal","Jasper",
        "Kiln","Kurgan","Kinship","Kingdom","Knap","Knapping",
        "Lithic","Landscape","Lexicon","Loom","Lacquer","Lapis lazuli","Lapita culture","Linear","Latrine","Lintel",
        "Midden","Megalithic","Mortar","Mosaic","Mound","Metallurgy","Mythology","Manuscript","Migration","Monument",
        "Neolithic","Nomad","Niche","Necropolis","Nodule","Nomination","Nephrite","Numismatics","Niche","Narthex",
        "Obsidian","Ostracon","Obelisk","Ossuary","Ornaments","Oxidation","Organic","Outcrop","Ochre","Oligarchy",
        "Pottery","Pyramid","Petroglyph","Palaeolithic","Pictogram","Prehistoric","Pigment","Papyrus","Pillar","Plough",
        "Quarry","Quern","Quill","Quartzite","Quechua",
        "Ruins","Radiocarbon dating","Relic","Ritual","Rock art","Reconstruction","Repository","Residue","Rhyton","Runic",
        "Stone","Sarcophagus","Stratigraphy","Settlement","Spearhead","Stele","Sculpture","Silt","Sediment","Symbology",
        "Tomb","Tool","Trowel","Trade","Terrace","Tumulus","Temple","Textile","Tracing","Tephra",
        "Urn","Upland","Urbanization","Unearth","Uruk period","Utilitarian","Urea","Uranium","Ute",
        "Vessel","Votive","Varnish","Volcano","Vault","Vestige","Veranda","Village","Vitreous","Vellum",
        "Wheel","Wall","Wattle","Wedge","Workshop","Watercourse","Weaving","Weapon","Wadi","Wampum",
        "X-ray fluorescence","Xerography","Xenolith","Xylography",
        "Yurt","Yoke","Yarn","Yggdrasil","Yataghan",
        "Ziggurat","Zinc","Zoology","Zircon","Zephyr","Zonation","Zulu","Zenith","Zebu","Zygote"
    ];
    const names = [...name, ...articleHeadings]
    const sortedNames = names.sort();
    const [matchedNames, setMatchedNames] = useState([]);
    const searchWrapperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [searchWrapperRef]);

    const handleInputChange = (e) => {
        const inputVal = e.target.value;
        setSearchInput(inputVal);

        if (inputVal.trim() === "") {
            setMatchedNames([]);
            setShowSuggestions(false);
            return;
        }

        const matches = sortedNames.filter(name =>
            name.toLowerCase().startsWith(inputVal.toLowerCase())
        ).slice(0, 5);

        setMatchedNames(matches);
        setShowSuggestions(true);
    };

    const handleSelectName = (name) => {
        setSearchInput(name);
        setMatchedNames([]);
        setShowSuggestions(false);
    };

    const handleSearch = () => {
        // Điều hướng đến trang kết quả tìm kiếm với query string
        navigate(`/search?q=${encodeURIComponent(searchInput)}`);
    };

    return (
        <div className="search-bar-wrapper" ref={searchWrapperRef}>
            <div className="header__search">
                <div className="header__search-input-wrap">
                    <input
                        type="text"
                        className="header__search-input"
                        placeholder="Search Articles ..."
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    {showSuggestions && (
                        <div className="header__search-history">
                            <h3 className="header__search-history-heading">Search Suggestion</h3>
                            <ul className="header__search-history-list list">
                                {matchedNames.map(name => (
                                    <li
                                        key={name}
                                        className="header__search-history-item list-items"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSelectName(name)}
                                    >
                                        <b>{searchInput}</b>{name.substr(searchInput.length)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                
                <button className="header__search-btn header__search-btn--yellow" onClick={handleSearch}>
                    <i className="header__search-btn-icon fas fa-search"></i>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
