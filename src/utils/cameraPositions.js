// Grupos de huesos
const handLeftBones = [
  "metacarpo_izq_V", "metacarpo_izq_IV", "metacarpo_izq_III", "metacarpo_izq_II", "metacarpo_izq_I",
  "falange_proximal_izq_V", "falange_proximal_izq_IV", "falange_proximal_izq_III", "falange_proximal_izq_II", "falange_proximal_izq_I",
  "falange_media_izq_V", "falange_media_izq_IV", "falange_media_izq_III", "falange_media_izq_II",
  "falange_distal_izq_V", "falange_distal_izq_IV", "falange_distal_izq_III", "falange_distal_izq_II", "falange_distal_izq_I"
];

const handRightBones = [
  "metacarpo_der_V", "metacarpo_der_IV", "metacarpo_der_III", "metacarpo_der_II", "metacarpo_der_I",
  "falange_proximal_der_V", "falange_proximal_der_IV", "falange_proxiamal_der_III", "falange_proximal_der_II", "falange_proximal_der_I",
  "falange_media_der_V", "falange_media_der_IV", "falange_media_der_III", "falange_media_der_II",
  "falange_distal_der_V", "falange_distal_der_IV", "falange_distal_der_III", "falange_distal_der_II", "falange_distal_der_I"
];

const footRightBones = [
  "tarso_der", "metatarso_der_I", "metatarso_der_II", "metatarso_der_III", "metatarso_der_IV", "metatarso_der_V",
  "falange_proximal_pie_izq_I", "falange_proximal_pie_izq_II", "falange_proximal_pie_izq_III", "falange_proximal_pie_izq_IV", "falange_proximal_pie_izq_V",
  "falange_media_pie_der_II", "falange_media_pie_der_III", "falange_media_pie_der_VI", "falange_media_pie_der_V",
  "falange_distal_pie_der_I", "falange_distal_pie_der_II", "falange_distal_pie_der_III", "falange_distal_pie_der_IV", "falange_distal_pie_der_V"
];

const footLeftBones = [
  "tarso_izq", "metatarso_pie_izq_I", "metatarso_pie_izq_II", "metatarso_pie_izq_III", "metatarso_pie_izq_IV", "metatarso_pie_izq_V",
  "falange_proximal_pie_izq_I", "falange_proximal_pie_izq_II", "falange_proximal_pie_izq_III", "falange_proximal_pie_izq_IV", "falange_proximal_pie_izq_V",
  "falange_media_pie_izq_II", "falange_media_pie_izq_III", "falange_media_pie_izq_VI", "falange_media_pie_izq_V",
  "falange_distal_pie_izq_I", "falange_distal_pie_izq_II", "falange_distal_pie_izq_III", "falange_distal_pie_izq_IV", "falange_distal_pie_izq_V"
];

const kneeBones = ["rotula_izq", "rotula_der"];
const PeroneRightBones = ["tibia_der", "perone_der"];
const PeroneLeftBones = ["tibia_izq", "perone_izq"];

// Targets
const targetHead = [0, 1.8, 0];
const targetChest = [0, 1.2, 0];
const targetRibs = [0, 0.9, 0];
const targetSpineUpper = [0, 1.7, 0];
const targetSpineMiddle = [0, 0.9, 0];
const targetSpineLower = [0, 0, 0];
const targetPelvis = [0, -1, 0];
const targetHands = [0, -1.5, 0];
const targetFeet = [0, -4, 0];

// Posiciones compartidas
const sharedHandLeftPosition = {
  position: [-2.4513906382959427, -1.4248482471121269, 0.5062575519137552],
  target: targetHands
};
const sharedHandRightPosition = {
  position: [1.769375633567739, -1.5076804697768458, 1.118898846453125],
  target: targetHands
};
const sharedFootRightPosition = {
  position: [2.271761244800456, -4.002447217227163, 1.7917092854417962],
  target: targetFeet
};
const sharedFootLeftPosition = {
  position: [-2.336519405840861, -4.126105293279662, 1.2289039176097623],
  target: targetFeet
};
const sharedKneePosition = {
  position: [-0.7048979940462425, -2.1212227381910624, 3.5633511352563962],
  target: [0, -3, 0]
};
const sharedPeroneRightPosition = {
  position: [2.4411310460898017, -3.6185284861877585, 2.342301868421227],
  target: [0, -3.5, 0]
};
const sharedPeroneLeftPosition = {
  position: [-3.037975753670554, -3.618528452358619, 1.547831622773844],
  target: [0, -3.5, 0]
};

const boneCameraPositions = {
  // Posiciones específicas (respetadas)
  creaneo001: {
    position: [-1.893936195418359, 1.8418108639008366, 1.4288204645396496],
    target: targetHead
  },
  mandibula: {
    position: [-1.893936195418359, 1.8418108639008366, 1.4288204645396496],
    target: targetHead
  },
  dentadura: {
    position: [-0.1750992698396386, 1.8418108639008366, 2.3491752525609018],
    target: targetHead
  },
  esternon: {
    position: [-0.8087827095176696, 0.7356380324257585, 2.2127451525286497],
    target: targetRibs
  },
  costillas: {
    position: [-0.8087827095176696, 0.7356380324257585, 2.2127451525286497],
    target: targetRibs
  },
  clavicula_der: {
    position: [1.3015626548368897, 1.2555392632190452, 2.039262107382818],
    target: targetChest
  },
  clavicula_izq: {
    position: [-2.026577172325337, 1.2555392632190452, 1.1117321451899058],
    target: targetChest
  },
  humero_der: {
    position: [1.8447582071077377, 0.35290223273538157, 2.3817709932402273],
    target: [0, 0.4, 0]
  },
  humero_izq: {
    position: [-3.147777405762319, 0.39058049637309067, 1.5832376957302945],
    target: [0, 0.4, 0]
  },
  escapula_der: {
    position: [2.5355499880828223, 0.9572232691923203, -1.3732418342625343],
    target: targetChest
  },
  escapula_iz: {
    position: [-1.4152085748534298, 0.9572232691923201, -2.034465205147177],
    target: targetChest
  },
  vertebras_cervicales: {
    position: [1.7684650674813538, 1.4926184415967705, -1.2022303464207185],
    target: targetSpineUpper
  },
  vertebras_toracicas: {
    position: [2.005027911238189, 0.9410641186788429, -1.6535743343057727],
    target: targetSpineMiddle
  },
  vertebras_lumbares: {
    position: [1.9224435818382046, -0.11109827321486118, -1.4947620369275112],
    target: targetSpineLower
  },
  discos_intervertebrales: {
    position: [-1.980471954692833, -0.06301875189925224, 1.2242520911987882],
    target: targetSpineLower
  },
  pelvis: {
    position: [-0.3699314948237785, -0.7864557836839543, 2.411126606706061],
    target: targetPelvis
  },
  radio_der: {
    position: [1.8447582071077377, -0.7908804750098527, 2.791921406262052],
    target: targetPelvis
  },
  cubito_der: {
    position: [-0.19648994241048579, -0.7908804750098527, 2.791921406262052],
    target: targetPelvis
  },
  radio_izq: {
    position: [-3.147777405762319, -0.626520267148299, 2.791921406262052],
    target: targetPelvis
  },
  cubito_izq: {
    position: [-0.206256396547238, -0.626520267148299, 2.791921406262052],
    target: targetPelvis
  },
  femur_der: {
    position: [1.2536518010528923, -1.6110049781295233, 3.3840482317125073],
    target: [0, -1.6, 0]
  },
  femur_izq: {
    position: [-2.8020095219289587, -1.6110049781295193, 1.8774941046520806],
    target: [0, -1.6, 0]
  },
  carpo_izq: sharedHandLeftPosition,
  carpo_der: sharedHandRightPosition,

  ...Object.fromEntries(handLeftBones.map(bone => [bone, sharedHandLeftPosition])),
  ...Object.fromEntries(handRightBones.map(bone => [bone, sharedHandRightPosition])),
  ...Object.fromEntries(footRightBones.map(bone => [bone, sharedFootRightPosition])),
  ...Object.fromEntries(footLeftBones.map(bone => [bone, sharedFootLeftPosition])),
  ...Object.fromEntries(kneeBones.map(bone => [bone, sharedKneePosition])),
  ...Object.fromEntries(PeroneRightBones.map(bone => [bone, sharedPeroneRightPosition])),
  ...Object.fromEntries(PeroneLeftBones.map(bone => [bone, sharedPeroneLeftPosition]))
};

export { boneCameraPositions };
