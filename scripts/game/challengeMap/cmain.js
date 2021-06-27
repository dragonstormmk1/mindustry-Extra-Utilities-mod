//Will be added in version 1.4 or 1.3.30 onwards
const graphiteBlock = extendContent(StaticWall, "graphite", {});
graphiteBlock.itemDrop = Items.graphite;
graphiteBlock.variants = 1;

const thoriumBlock = extendContent(StaticWall, "thorium", {});
thoriumBlock.itemDrop = Items.thorium;
thoriumBlock.variants = 1;

const pyratiteBlock = extendContent(StaticWall, "pyratite", {});
pyratiteBlock.itemDrop = Items.pyratite;
pyratiteBlock.variants = 1;

const challenge = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(challenge, 6));
        this.super$load();
    }
}, "challenge", Planets.sun, 3, 1);
challenge.generator = new SerpuloPlanetGenerator();
challenge.atmosphereColor = Color.valueOf("d31e1e");
challenge.accessible = true;
challenge.atmosphereRadIn = 0.04;
challenge.atmosphereRadOut = 0.3;
challenge.startSector = 12;
exports.challenge = challenge;

const start = new SectorPreset("start", challenge, 12);
start.difficulty = 7;
exports.start = start;

const sporeArea = new SectorPreset("SporeArea", challenge, 101);
sporeArea.difficulty = 10;
exports.sporeArea = sporeArea;