# Safety Content Review Queue

Review status: awaiting qualified human scientific, clinical-safety, and regulatory review.

This report records the six peptide pages flagged during the Phase 1 production-integrity audit. It does not determine that every cited passage is unsafe, and no scientific or educational content was removed or rewritten in Phase 1.

The review should apply the repository prohibition on dosing, reconstitution, preparation, storage, injection, treatment-cycle, sourcing, and self-administration guidance. Evidence-only descriptions of study interventions should remain clearly separated from actionable instructions.

## `pt/peptides/aod-9604.html`

Flagged sections and controls:

- “Calculadora de concentração” and “Tabela proporcional”.
- “Planejamento de materiais”, including vial count, final volume, total diluent, BAC bottle, and materials outputs.
- “Solubilidade e solução”.
- “O que observar após a reconstituição”.

Human review focus: determine whether the calculator, materials estimator, vial/volume examples, diluent references, and post-reconstitution inspection criteria create actionable preparation guidance.

## `pt/peptides/epitalon.html`

Flagged sections:

- “Princípios para vial liofilizado de 10 mg”.
- “Checklist antes de considerar a solução válida”.
- “Protocolos reportados”.

Human review focus: diluent selection, aseptic preparation, septum handling, controlled addition/mixing, concentration examples, labeling, storage, stability, and whether research-protocol discussion is sufficiently non-actionable.

## `pt/peptides/gloe-70mg.html`

Flagged sections:

- “Princípios para preparar e interpretar o blend”.
- “Checklist de qualidade”.
- The post-reconstitution labeling, temperature, light-protection, and stability language within the preparation guidance.

Human review focus: vehicle selection, aseptic technique, dissolution, total and component concentration examples, and post-reconstitution handling. Product naming and the later GLOE-to-GLOW URL migration are outside this safety review.

## `pt/peptides/klow-80mg.html`

Flagged sections:

- “Antes de reconstituir: confirme a fórmula”.
- “Como interpretar o preparo do blend”.
- The numbered documentation, diluent, aseptic-technique, dissolution, concentration, and conservation instructions.

Human review focus: whether the ordered preparation sequence and worked concentration examples amount to actionable reconstitution or storage guidance despite the educational framing.

## `pt/peptides/mots-c.html`

Flagged sections:

- “Princípios para um vial liofilizado de 10 mg”.
- “Erros comuns”.
- “Protocolos de pesquisa”.

Human review focus: vehicle substitution, aseptic technique, dissolution/agitation, worked concentration examples, labeling, refrigeration, light protection, stability, and the boundary between study-description context and protocol guidance.

## `pt/peptides/retatrutide.html`

Flagged sections:

- The introductory safety note containing the term “reconstituição”.
- “O sinal de dose-resposta”.
- “Escala de dose e magnitude da perda de peso”.

Human review focus: the reconstitution occurrence is a disclaimer stating that the page does not provide such guidance. Confirm that this is a false positive. Separately confirm that trial-arm dose and outcome reporting remains evidence description and cannot reasonably be read as individualized dosing guidance.

## Required human decisions

For each page, record:

1. Reviewer name, role, and review date.
2. Whether each flagged section is acceptable, requires non-actionable reframing, or must be removed.
3. Whether concentration calculators or material estimators are permissible under the platform safety policy.
4. Whether study dose reporting is adequately distinguished from user instructions.
5. Any required legal or regulatory review before republication.

## Policy update — 2026-11-18

The owner adopted `docs/PREPARATION_AND_DOSE_POLICY.md`. Preparation content on the six flagged PT pages is now reviewed against that policy instead of the earlier blanket prohibition, and each page shows the standard PT-BR warning block. Items still open for human review: the third-party reference values on `pt/peptides/aod-9604.html` ("Referência usada no PeptideDosages") and confirmation that no page recommends a dose, cycle or combination.
