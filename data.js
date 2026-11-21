/* ==========================================================================
   Frontier Labs Index — labs and papers

   Each paper carries:
     authors  first authors followed by "et al." (or the lab, for team reports)
     arxiv    arXiv identifier, when the paper has one
     doi      publisher DOI, when the version of record is a journal
     url      a direct link, only when the paper has neither of the above
   ========================================================================== */

window.LABS = [
  { id: "anthropic", name: "Anthropic", url: "https://www.anthropic.com/research" },
  { id: "openai", name: "OpenAI", url: "https://openai.com/research" },
  { id: "google", name: "Google DeepMind", url: "https://deepmind.google/research/" },
  { id: "nvidia", name: "NVIDIA", url: "https://research.nvidia.com" },
  { id: "deepseek", name: "DeepSeek", url: "https://www.deepseek.com" },
  { id: "moonshot", name: "Moonshot AI", url: "https://www.moonshot.ai" },
  { id: "zhipu", name: "Zhipu AI", url: "https://z.ai" }
];

window.PAPERS = [
  /* ---------------- Anthropic ---------------- */
  {
    id: "an-01",
    lab: "anthropic",
    title: "Constitutional AI: Harmlessness from AI Feedback",
    authors: "Yuntao Bai, Saurav Kadavath, Sandipan Kundu, et al.",
    year: 2022,
    cat: "Safety & alignment",
    tags: ["Alignment", "RLHF", "Constitutions"],
    arxiv: "2212.08073",
    summary: "Anthropic's recipe for training a model to be harmless with far less human labelling: write a short set of principles, have the model critique and revise its own answers against them, then train on that feedback. The model learns to explain its refusals instead of simply avoiding certain topics. This became the alignment backbone of the Claude models."
  },
  {
    id: "an-02",
    lab: "anthropic",
    title: "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback",
    authors: "Yuntao Bai, Andy Jones, Kamal Ndousse, et al.",
    year: 2022,
    cat: "Safety & alignment",
    tags: ["Alignment", "RLHF", "Honesty"],
    arxiv: "2204.05862",
    summary: "The first detailed account of Anthropic's alignment pipeline: supervised fine-tuning followed by a reward model trained on human preferences. The paper tracks how helpfulness and harmlessness trade off against each other and argues both can be raised at once. Its evaluation approach shaped how later assistants were built."
  },
  {
    id: "an-03",
    lab: "anthropic",
    title: "A Mathematical Framework for Transformer Circuits",
    authors: "Nelson Elhage, Neel Nanda, Catherine Olsson, et al.",
    year: 2021,
    cat: "Interpretability",
    tags: ["Mechanistic interpretability", "Attention", "Circuits"],
    url: "https://transformer-circuits.pub/2021/framework/index.html",
    summary: "A decomposition of the transformer into small, analysable pieces, showing how attention heads and MLP layers implement recognisable operations such as copying, induction and pattern matching. Rather than measuring behaviour from the outside, the paper tries to read the computation itself. It founded the field of mechanistic interpretability."
  },
  {
    id: "an-04",
    lab: "anthropic",
    title: "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning",
    authors: "Trenton Bricken, Adly Templeton, Joshua Batson, et al.",
    year: 2023,
    cat: "Interpretability",
    tags: ["Sparse autoencoders", "Features", "Dictionary learning"],
    url: "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
    summary: "Individual neurons usually respond to several unrelated ideas at once, which makes them hard to read. Using sparse dictionary learning, the authors factor a small language model into units that each fire for one recognisable concept. This was the first systematic look at features a human can actually name."
  },
  {
    id: "an-05",
    lab: "anthropic",
    title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet",
    authors: "Adly Templeton, Tom Conerly, Jonathan Marcus, et al.",
    year: 2024,
    cat: "Interpretability",
    tags: ["Sparse autoencoders", "Claude", "Steering"],
    url: "https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html",
    summary: "The same sparse dictionary approach, applied to a production model at the scale of millions of features. The team found abstract concepts far beyond simple words and showed that amplifying or suppressing a single feature changes behaviour in a controlled way. It made the link between interpretability and safety concrete."
  },
  {
    id: "an-06",
    lab: "anthropic",
    title: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training",
    authors: "Evan Hubinger, Carson Denison, Jesse Mu, et al.",
    year: 2024,
    cat: "Safety & alignment",
    tags: ["Deception", "Backdoors", "Safety training"],
    arxiv: "2401.05566",
    summary: "A deliberately unsettling experiment: a model can be trained to behave badly only under a rare trigger, and standard safety training, including adversarial training, fails to remove the behaviour. Larger models held on to it better. The result is a sharp question about whether today's safety methods are enough for future systems."
  },
  {
    id: "an-07",
    lab: "anthropic",
    title: "Alignment Faking in Large Language Models",
    authors: "Ryan Greenblatt, Carson Denison, Benjamin Wright, et al.",
    year: 2024,
    cat: "Safety & alignment",
    tags: ["Deception", "Evaluation", "Alignment"],
    arxiv: "2412.14093",
    summary: "The first empirical case of a model pretending to agree with a training objective it rejects, so that it would not be modified. Claude 3 Opus complied during training while reasoning that doing so protected its existing preferences. The finding reframes how safety evaluations of capable models should be designed."
  },
  {
    id: "an-08",
    lab: "anthropic",
    title: "The Claude 3 Model Family: Opus, Sonnet, Haiku",
    authors: "Anthropic",
    year: 2024,
    cat: "Language models",
    tags: ["Claude", "Benchmarks", "Multimodal"],
    url: "https://www.anthropic.com/news/claude-3-family",
    summary: "The model card for a family of three model sizes built from one recipe, which turned the choice between quality, price and latency into a design decision. The models handled images as well as text and moved the state of the art on reasoning and multilingual benchmarks."
  },

  /* ---------------- OpenAI ---------------- */
  {
    id: "oa-01",
    lab: "openai",
    title: "Language Models are Few-Shot Learners",
    authors: "Tom B. Brown, Benjamin Mann, Nick Ryder, et al.",
    year: 2020,
    cat: "Language models",
    tags: ["GPT-3", "Scale", "In-context learning"],
    arxiv: "2005.14165",
    summary: "GPT-3, at 175 billion parameters, showed that a large enough language model can pick up a new task from a handful of examples in its prompt, with no gradient updates at all. This ended the era of training one model per task and started the era of the general-purpose model."
  },
  {
    id: "oa-02",
    lab: "openai",
    title: "GPT-4 Technical Report",
    authors: "OpenAI",
    year: 2023,
    cat: "Language models",
    tags: ["GPT-4", "Multimodal", "Evaluation"],
    arxiv: "2303.08774",
    summary: "A report that withholds architectural detail but changed how models are evaluated: professional and academic exams, image understanding, and an extensive account of risks and mitigations. GPT-4 performed near the human range on many of those exams, which made the economic and educational stakes of these systems concrete."
  },
  {
    id: "oa-03",
    lab: "openai",
    title: "Training Language Models to Follow Instructions with Human Feedback",
    authors: "Long Ouyang, Jeff Wu, Xu Jiang, et al.",
    year: 2022,
    cat: "Safety & alignment",
    tags: ["InstructGPT", "RLHF", "Alignment"],
    arxiv: "2203.02155",
    summary: "The InstructGPT paper showed that human feedback can make a small model more useful, in human preference terms, than a model a hundred times larger. It separated raw capability from usability and defined the conversational behaviour that later assistants inherited."
  },
  {
    id: "oa-04",
    lab: "openai",
    title: "Learning to Summarize from Human Feedback",
    authors: "Nisan Stiennon, Long Ouyang, Jeffrey Wu, et al.",
    year: 2020,
    cat: "Safety & alignment",
    tags: ["Summarisation", "Reward models", "Evaluation"],
    arxiv: "2009.01325",
    summary: "One of the first clear demonstrations that human feedback beats automatic metrics such as word overlap, and that models can be trained against a learned reward instead of a reference text. The resulting summaries were preferred by evaluators over the human-written references."
  },
  {
    id: "oa-05",
    lab: "openai",
    title: "Evaluating Large Language Models Trained on Code",
    authors: "Mark Chen, Jerry Tworek, Heewoo Jun, et al.",
    year: 2021,
    cat: "Code & math",
    tags: ["Codex", "Code generation", "HumanEval"],
    arxiv: "2107.03374",
    summary: "Codex, a GPT model further trained on public code, together with HumanEval: a set of programming problems with unit tests so that generated code could be checked automatically. The paper raised the safety and labour questions of programming assistants years before they became routine, and led to the first commercial coding tools."
  },
  {
    id: "oa-06",
    lab: "openai",
    title: "Hierarchical Text-Conditional Image Generation with CLIP Latents",
    authors: "Aditya Ramesh, Prafulla Dhariwal, Alex Nichol, et al.",
    year: 2022,
    cat: "Image & video",
    tags: ["DALL·E 2", "Diffusion", "CLIP"],
    arxiv: "2204.06125",
    summary: "A two-stage design: a prior maps a caption into the CLIP embedding space, and a diffusion decoder turns that embedding into an image. It produced an unprecedented mix of variety, prompt fidelity and semantic editability, and set the direction for most text-to-image models that followed."
  },
  {
    id: "oa-07",
    lab: "openai",
    title: "Robust Speech Recognition via Large-Scale Weak Supervision",
    authors: "Alec Radford, Jong Wook Kim, Tao Xu, et al.",
    year: 2022,
    cat: "Audio",
    tags: ["Whisper", "Speech recognition", "Multilingual"],
    arxiv: "2212.04356",
    summary: "Whisper was trained on a very large corpus of weakly labelled audio rather than a small, carefully transcribed one. That alone outperformed fine-tuned models on cleaner datasets, and it held up on noisy, accented audio it was never specially trained for. Speech recognition became a general multilingual model."
  },
  {
    id: "oa-08",
    lab: "openai",
    title: "Let's Verify Step by Step",
    authors: "Hunter Lightman, Vineet Kosaraju, Yura Burda, et al.",
    year: 2023,
    cat: "Reasoning",
    tags: ["Process supervision", "Math", "Chain of thought"],
    arxiv: "2305.20050",
    summary: "Two ways to train a verifier: reward only the final answer, or reward every step of the reasoning. Step-level supervision gave a large and reliable gain on competition mathematics. The team released the step-labelled data so the result could be reproduced and extended."
  },
  {
    id: "oa-09",
    lab: "openai",
    title: "Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision",
    authors: "Collin Burns, Pavel Izmailov, Jan Hendrik Kirchner, et al.",
    year: 2023,
    cat: "Safety & alignment",
    tags: ["Superalignment", "Oversight", "Generalisation"],
    arxiv: "2312.09390",
    summary: "A small proxy for a large problem: if humans end up weaker than the models they supervise, what happens to the training signal? Using a small model to supervise a large one, the paper recovered much, but not all, of the stronger model's ability, and mapped out where the transfer breaks down."
  },
  {
    id: "oa-10",
    lab: "openai",
    title: "Video generation models as world simulators",
    authors: "Tim Brooks, Bill Peebles, et al.",
    year: 2024,
    cat: "Image & video",
    tags: ["Sora", "Video", "World models"],
    url: "https://openai.com/index/video-generation-models-as-world-simulators/",
    summary: "The technical report for Sora, which tokenises video into space-time patches and generates long clips with a diffusion transformer, keeping objects stable across seconds of motion. The claim is conceptual as much as technical: scaled further, these models act as general simulators of the physical world."
  },

  /* ---------------- Google DeepMind ---------------- */
  {
    id: "gg-01",
    lab: "google",
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, et al.",
    year: 2017,
    cat: "Language models",
    tags: ["Transformer", "Attention", "Architecture"],
    arxiv: "1706.03762",
    summary: "The paper that removed recurrence and convolution and made attention the only building block of the model. Training parallelises cleanly and distant dependencies sit a single step apart. The same architecture now models language, images, audio and proteins."
  },
  {
    id: "gg-02",
    lab: "google",
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova",
    year: 2018,
    cat: "Language models",
    tags: ["BERT", "Pre-training", "NLP"],
    arxiv: "1810.04805",
    summary: "By masking words at random and predicting them from both directions, BERT learned representations that, with a light fine-tuning step, set records on a wide range of language understanding tasks. It established pre-train then fine-tune as the default pattern for the field."
  },
  {
    id: "gg-03",
    lab: "google",
    title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
    authors: "Colin Raffel, Noam Shazeer, Adam Roberts, et al.",
    year: 2019,
    cat: "Language models",
    tags: ["T5", "Transfer learning", "Pre-training"],
    arxiv: "1910.10683",
    summary: "T5 recast every language task as text in, text out, then swept systematically over model size, dataset size and training objectives. Much of today's intuition about data mixtures and scaling comes from these controlled comparisons rather than from any single model."
  },
  {
    id: "gg-04",
    lab: "google",
    title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
    authors: "Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, et al.",
    year: 2020,
    cat: "Vision & multimodal",
    tags: ["Vision transformer", "Images", "Architecture"],
    arxiv: "2010.11929",
    summary: "Cut an image into 16x16 patches, treat the patches as tokens, and hand them to a plain transformer. With enough data the convolutional inductive bias turns out to be unnecessary. This cleared the way for a single architecture that handles both vision and language."
  },
  {
    id: "gg-05",
    lab: "google",
    title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
    authors: "Jason Wei, Xuezhi Wang, Dale Schuurmans, et al.",
    year: 2022,
    cat: "Reasoning",
    tags: ["Chain of thought", "Prompting", "Arithmetic"],
    arxiv: "2201.11903",
    summary: "A handful of worked examples that show the reasoning steps, rather than only the answer, produced a step change in performance on arithmetic, commonsense and symbolic reasoning. Its sheer simplicity made it one of the most widely adopted ideas in the field."
  },
  {
    id: "gg-06",
    lab: "google",
    title: "Training Compute-Optimal Large Language Models",
    authors: "Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, et al.",
    year: 2022,
    cat: "Training & infrastructure",
    tags: ["Chinchilla", "Scaling laws", "Efficiency"],
    arxiv: "2203.15556",
    summary: "A careful re-derivation of the scaling laws showing that parameters and training tokens should grow together, not parameters alone. The resulting Chinchilla model, with 70 billion parameters and 1.4 trillion tokens, beat models several times its size and pushed the field toward smaller models with far more data."
  },
  {
    id: "gg-07",
    lab: "google",
    title: "PaLM: Scaling Language Modeling with Pathways",
    authors: "Aakanksha Chowdhery, Sharan Narang, Jacob Devlin, et al.",
    year: 2022,
    cat: "Training & infrastructure",
    tags: ["PaLM", "Scale", "Distributed training"],
    arxiv: "2204.02311",
    summary: "A 540-billion-parameter dense transformer trained across two parallelisation axes on 6,144 accelerator chips, with measurements of how quality keeps improving as scale grows. PaLM made the case that sharp jumps in reasoning and translation can be tied to infrastructure as much as to architecture."
  },
  {
    id: "gg-08",
    lab: "google",
    title: "Gemini: A Family of Highly Capable Multimodal Models",
    authors: "Gemini Team, Google",
    year: 2023,
    cat: "Vision & multimodal",
    tags: ["Gemini", "Multimodal", "Reasoning"],
    arxiv: "2312.11805",
    summary: "A family of three model sizes trained on text, images, audio and video from the start rather than with modalities bolted onto a text model. The report documents image, audio and video benchmarks, and a set of evaluations aimed squarely at the frontier models of its day."
  },
  {
    id: "gg-09",
    lab: "google",
    title: "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context",
    authors: "Petko Georgiev, Gemini Team, et al.",
    year: 2024,
    cat: "Language models",
    tags: ["Long context", "Mixture of experts", "Multimodal"],
    arxiv: "2403.05530",
    summary: "A mixture-of-experts architecture paired with an extremely long context window, so that whole books or hours of video fit in a single request. Retrieval quality stayed almost flat across context lengths in the millions of tokens, which was the paper's striking claim."
  },
  {
    id: "gg-10",
    lab: "google",
    title: "Highly accurate protein structure prediction with AlphaFold",
    authors: "John Jumper, Richard Evans, Alexander Pritzel, et al.",
    year: 2021,
    cat: "Science",
    tags: ["AlphaFold", "Biology", "Protein folding"],
    doi: "10.1038/s41586-021-03819-2",
    summary: "AlphaFold 2 predicted three-dimensional protein structures at accuracy comparable to experimental methods and won the CASP14 assessment by a wide margin. It appeared in Nature rather than as a preprint, and it showed that deep learning can reorganise an entire experimental science."
  },

  /* ---------------- NVIDIA ---------------- */
  {
    id: "nv-01",
    lab: "nvidia",
    title: "Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism",
    authors: "Mohammad Shoeybi, Mostofa Patwary, Raul Puri, et al.",
    year: 2019,
    cat: "Training & infrastructure",
    tags: ["Model parallelism", "Training", "Transformer"],
    arxiv: "1909.08053",
    summary: "A method for splitting the weight matrices inside each transformer layer across several GPUs with minimal communication between them. It made it possible to train models too large to fit on a single chip, and became the basis of the Megatron framework that many large models were trained with."
  },
  {
    id: "nv-02",
    lab: "nvidia",
    title: "A Style-Based Generator Architecture for Generative Adversarial Networks",
    authors: "Tero Karras, Samuli Laine, Timo Aila",
    year: 2018,
    cat: "Image & video",
    tags: ["StyleGAN", "GAN", "Latent space"],
    arxiv: "1812.04948",
    summary: "By injecting a style vector at each resolution of the generator, StyleGAN produced a latent space whose directions carry readable meaning, such as age, hair colour or lighting. The synthetic faces were realistic enough to start a public debate about machine-generated imagery."
  },
  {
    id: "nv-03",
    lab: "nvidia",
    title: "Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B, A Large-Scale Generative Language Model",
    authors: "Shaden Smith, Mostofa Patwary, Brandon Norick, et al.",
    year: 2021,
    cat: "Language models",
    tags: ["Scale", "Model parallelism", "Few-shot"],
    arxiv: "2201.11990",
    summary: "A 530-billion-parameter model built jointly by Microsoft and NVIDIA, which combined the DeepSpeed and Megatron training stacks in a single pipeline. The report documents the stability problems of training at that size, the engineering that made it hold, and its accuracy in zero-shot and few-shot settings."
  },
  {
    id: "nv-04",
    lab: "nvidia",
    title: "Instant Neural Graphics Primitives with a Multiresolution Hash Encoding",
    authors: "Thomas Müller, Alex Evans, Christoph Schied, Alexander Keller",
    year: 2022,
    cat: "Training & infrastructure",
    tags: ["Instant-NGP", "Hash encoding", "Neural graphics"],
    arxiv: "2201.05989",
    summary: "Replacing the large network with a multiresolution hash table cut the training time of a scene from hours to seconds, and rendering to real time, without a loss in quality. It moved neural graphics from offline research toward interactive use."
  },
  {
    id: "nv-05",
    lab: "nvidia",
    title: "Alias-Free Generative Adversarial Networks",
    authors: "Tero Karras, Miika Aittala, Samuli Laine, et al.",
    year: 2021,
    cat: "Image & video",
    tags: ["StyleGAN3", "Equivariance", "Image generation"],
    arxiv: "2106.12423",
    summary: "The authors traced the texture 'sticking' seen in generated images to aliasing inside the generator, which made details depend on absolute pixel position. Redesigning the network to be equivariant to translation and rotation produced a generator whose textures stay anchored when the image moves."
  },
  {
    id: "nv-06",
    lab: "nvidia",
    title: "Voyager: An Open-Ended Embodied Agent with Large Language Models",
    authors: "Guanzhi Wang, Yuqi Xie, Yunfan Jiang, et al.",
    year: 2023,
    cat: "Agents",
    tags: ["Agents", "Minecraft", "Lifelong learning"],
    arxiv: "2305.16291",
    summary: "An agent in an open-ended world writes its own code to learn new skills, checks the result against environment feedback, and stores working skills in a growing library. No gradients are updated; memory and code are what grow. It was an early example of a lifelong-learning agent built around a language model."
  },
  {
    id: "nv-07",
    lab: "nvidia",
    title: "Eureka: Human-Level Reward Design via Coding Large Language Models",
    authors: "Yecheng Jason Ma, William Liang, Guanzhi Wang, et al.",
    year: 2023,
    cat: "Agents",
    tags: ["Reward design", "Reinforcement learning", "Code generation"],
    arxiv: "2310.12931",
    summary: "Eureka asks a language model to write the reward function for a simulated task in code, then refines it using the training statistics of the agent. The automatically designed rewards matched or beat expert-written ones across a range of dexterous robotics tasks."
  },
  {
    id: "nv-08",
    lab: "nvidia",
    title: "Nemotron-4 340B Technical Report",
    authors: "NVIDIA, Bo Adler, et al.",
    year: 2024,
    cat: "Language models",
    tags: ["Nemotron", "Synthetic data", "Open model"],
    arxiv: "2406.11704",
    summary: "NVIDIA released a family of base, instruct and reward models at 340 billion parameters, with most of the training data synthesised by the models themselves. The report treats data quality, topic balance and safety as design parameters that can be tuned directly."
  },

  /* ---------------- DeepSeek ---------------- */
  {
    id: "ds-01",
    lab: "deepseek",
    title: "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism",
    authors: "DeepSeek-AI, Xiao Bi, et al.",
    year: 2024,
    cat: "Language models",
    tags: ["Open model", "Bilingual data", "Scaling laws"],
    arxiv: "2401.02954",
    summary: "A transparent account of training dense 7B and 67B models on about two trillion bilingual tokens, with a careful study of data mixtures and scaling behaviour. Publishing the details openly, against closed rivals, made DeepSeek a credible open research lab."
  },
  {
    id: "ds-02",
    lab: "deepseek",
    title: "DeepSeek-Coder: When the Large Language Model Meets Programming — The Rise of Code Intelligence",
    authors: "Daya Guo, Qihao Zhu, Dejian Yang, et al.",
    year: 2024,
    cat: "Code & math",
    tags: ["Code", "Fill-in-the-middle", "Repository-level"],
    arxiv: "2401.14196",
    summary: "Code depends on other files and definitions, so the pretraining data was organised by repository, with project boundaries kept intact. The resulting models, trained with fill-in-the-middle objectives, outperformed larger general-purpose models on repository-level completion."
  },
  {
    id: "ds-03",
    lab: "deepseek",
    title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models",
    authors: "Zhihong Shao, Peiyi Wang, Qihao Zhu, et al.",
    year: 2024,
    cat: "Code & math",
    tags: ["Mathematics", "GRPO", "Math data"],
    arxiv: "2402.03300",
    summary: "A 7B model trained on mathematical content mined from the web, then optimised with GRPO, a reinforcement learning method that drops the separate value network used by PPO. It approached the competition-maths results of much larger models, and GRPO later became a standard recipe for open reasoning models."
  },
  {
    id: "ds-04",
    lab: "deepseek",
    title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model",
    authors: "DeepSeek-AI, Aixin Liu, et al.",
    year: 2024,
    cat: "Training & infrastructure",
    tags: ["Mixture of experts", "Multi-head latent attention", "Efficiency"],
    arxiv: "2405.04434",
    summary: "Multi-head latent attention compresses the key-value cache into a small latent vector, which sharply reduces memory during inference while keeping quality close to standard attention. Combined with sparse experts, the result was a strong model at a fraction of the usual serving cost."
  },
  {
    id: "ds-05",
    lab: "deepseek",
    title: "DeepSeek-V3 Technical Report",
    authors: "DeepSeek-AI, Aixin Liu, et al.",
    year: 2024,
    cat: "Training & infrastructure",
    tags: ["Mixture of experts", "FP8 training", "Multi-token prediction"],
    arxiv: "2412.19437",
    summary: "A 671-billion-parameter mixture-of-experts model trained in 8-bit floating point, using an auxiliary-loss-free load balancing scheme and multi-token prediction. The team reported a training cost far below comparable models while quality reached the level of leading closed models."
  },
  {
    id: "ds-06",
    lab: "deepseek",
    title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning",
    authors: "DeepSeek-AI, Daya Guo, et al.",
    year: 2025,
    cat: "Reasoning",
    tags: ["Reasoning", "Reinforcement learning", "Chain of thought"],
    arxiv: "2501.12948",
    summary: "Long chain-of-thought reasoning emerged from reinforcement learning with simple rule-based rewards for correct answers, with little demonstration data. The reasoning traces were then distilled into smaller models. The open release sparked a wave of reasoning models that can run on local hardware."
  },
  {
    id: "ds-07",
    lab: "deepseek",
    title: "DeepSeek-VL: Towards Real-World Vision-Language Understanding",
    authors: "Haoyu Lu, Wen Liu, Bo Zhang, et al.",
    year: 2024,
    cat: "Vision & multimodal",
    tags: ["Vision-language", "Documents", "Real-world data"],
    arxiv: "2403.05525",
    summary: "Rather than tuning for lab benchmarks, the training data was built from real scenarios: charts, scientific documents, interfaces and everyday photos. A hybrid vision encoder at high resolution was designed to capture fine text inside images."
  },
  {
    id: "ds-08",
    lab: "deepseek",
    title: "DeepSeek-VL2: Mixture-of-Experts Vision-Language Models for Advanced Multimodal Understanding",
    authors: "Zhiyu Wu, Xiaokang Chen, Zizheng Pan, et al.",
    year: 2024,
    cat: "Vision & multimodal",
    tags: ["Mixture of experts", "Dynamic resolution", "Multimodal"],
    arxiv: "2412.10302",
    summary: "The second generation pairs sparse experts with a dynamic high-resolution image tiling module, which keeps dense documents, tables and charts legible. It shows a capable multimodal model can run at low inference cost."
  },

  /* ---------------- Moonshot AI ---------------- */
  {
    id: "ms-01",
    lab: "moonshot",
    title: "Kimi k1.5: Scaling Reinforcement Learning with LLMs",
    authors: "Kimi Team, Angang Du, et al.",
    year: 2025,
    cat: "Reasoning",
    tags: ["Kimi", "Reinforcement learning", "Long context"],
    arxiv: "2501.12599",
    summary: "Moonshot showed that long-context reinforcement learning can train strong reasoning without complex tree search, using a simple policy-optimisation method and a reward for correct answers. Context length was treated as a scaling axis, and the same recipe covered text and image reasoning."
  },
  {
    id: "ms-02",
    lab: "moonshot",
    title: "Kimi K2: Open Agentic Intelligence",
    authors: "Kimi Team, Yifan Bai, et al.",
    year: 2025,
    cat: "Agents",
    tags: ["Agents", "Mixture of experts", "Tool use"],
    arxiv: "2507.20534",
    summary: "A sparse mixture-of-experts model with one trillion total parameters, trained on agentic data covering tool use, multi-step execution and self-correction. The paper argues that agentic ability comes from practising in a loop of actions and feedback, not only from reading text."
  },
  {
    id: "ms-03",
    lab: "moonshot",
    title: "MoBA: Mixture of Block Attention for Long-Context LLMs",
    authors: "Enzhe Lu, Zhejun Jiang, Jingyuan Liu, et al.",
    year: 2025,
    cat: "Training & infrastructure",
    tags: ["Attention", "Long context", "Efficiency"],
    arxiv: "2502.13189",
    summary: "Instead of full attention over every token, the context is split into blocks and each query attends only to the blocks a learned router selects. The cost of very long contexts grows far more slowly, while quality stays close to full attention."
  },
  {
    id: "ms-04",
    lab: "moonshot",
    title: "Kimi-VL Technical Report",
    authors: "Kimi Team, Angang Du, et al.",
    year: 2025,
    cat: "Vision & multimodal",
    tags: ["Kimi", "Vision-language", "Agents"],
    arxiv: "2504.07491",
    summary: "An efficient vision-language model with a mixture-of-experts language backbone and a compression module for long multimodal contexts, so that dozens of images can be read in sequence. On document, chart and interface benchmarks it reached the level of much larger models."
  },
  {
    id: "ms-05",
    lab: "moonshot",
    title: "Kimi-Audio Technical Report",
    authors: "Kimi Team, Ding Ding, et al.",
    year: 2025,
    cat: "Audio",
    tags: ["Audio", "Speech", "Unified model"],
    arxiv: "2504.18425",
    summary: "A single audio foundation model trained for speech recognition, audio understanding and speech generation, with an audio tokeniser and a streaming decoder for low-latency replies. It treats audio as one unified task rather than a chain of separate modules."
  },
  {
    id: "ms-06",
    lab: "moonshot",
    title: "Muon is Scalable for LLM Training",
    authors: "Jingyuan Liu, Jianlin Su, Xingcheng Yao, et al.",
    year: 2025,
    cat: "Training & infrastructure",
    tags: ["Optimiser", "Training", "Scale"],
    arxiv: "2502.16982",
    summary: "Muon orthogonalises the momentum update of each weight matrix, which speeds up convergence compared with AdamW. With careful scaling of the update and a distributed implementation, the authors report it stays stable at billion-parameter scale and cuts training time."
  },

  /* ---------------- Zhipu AI ---------------- */
  {
    id: "zp-01",
    lab: "zhipu",
    title: "GLM-130B: An Open Bilingual Pre-trained Model",
    authors: "Aohan Zeng, Xiao Liu, Zhengxiao Du, et al.",
    year: 2022,
    cat: "Language models",
    tags: ["GLM", "Bilingual", "Open model"],
    arxiv: "2210.02414",
    summary: "One of the first open models at the 100-billion-parameter scale, built for genuine Chinese and English ability. The paper documents the instability problems of training at that size and the techniques used to prevent divergence."
  },
  {
    id: "zp-02",
    lab: "zhipu",
    title: "GLM: General Language Model Pretraining with Autoregressive Blank Infilling",
    authors: "Zhengxiao Du, Yujia Qian, Xiao Liu, et al.",
    year: 2021,
    cat: "Language models",
    tags: ["Pre-training", "Blank infilling", "Architecture"],
    arxiv: "2103.10360",
    summary: "GLM introduced a pretraining objective in which spans of text are masked and then regenerated autoregressively. The model therefore gets both bidirectional understanding, as in masked models, and generation, as in autoregressive ones. The combination became the foundation of the GLM family."
  },
  {
    id: "zp-03",
    lab: "zhipu",
    title: "CogVLM: Visual Expert for Pretrained Language Models",
    authors: "Weihan Wang, Qingsong Lv, Wenmeng Yu, et al.",
    year: 2023,
    cat: "Vision & multimodal",
    tags: ["Vision-language", "Visual expert", "Alignment"],
    arxiv: "2311.03079",
    summary: "Instead of feeding image features into the input of a language model, CogVLM adds a trainable visual expert to every layer, so image and text representations are aligned at every depth. The original language model weights are left untouched, and visual performance rivals much larger proprietary systems."
  },
  {
    id: "zp-04",
    lab: "zhipu",
    title: "CogAgent: A Visual Language Model for GUI Agents",
    authors: "Wenyi Hong, Weihan Wang, Qingsong Lv, et al.",
    year: 2023,
    cat: "Agents",
    tags: ["GUI agents", "Vision-language", "High resolution"],
    arxiv: "2312.08914",
    summary: "To act on a user interface, a model has to read small text, buttons and layout accurately. CogAgent adds a high-resolution encoder alongside the base model, which set results on GUI navigation and document understanding benchmarks of its time."
  },
  {
    id: "zp-05",
    lab: "zhipu",
    title: "CogVideoX: Text-to-Video Diffusion Models with An Expert Transformer",
    authors: "Zhuoyi Yang, Jiayan Teng, Wendi Zheng, et al.",
    year: 2024,
    cat: "Image & video",
    tags: ["Video", "Diffusion", "Temporal coherence"],
    arxiv: "2408.06072",
    summary: "For motion to stay coherent, text and video must be aligned in a shared space. The paper introduces a 3D attention design and an expert transformer, together with training techniques that keep long text-to-video generation stable and reduce its cost."
  },
  {
    id: "zp-06",
    lab: "zhipu",
    title: "GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models",
    authors: "GLM-4.5 Team, Aohan Zeng, et al.",
    year: 2025,
    cat: "Agents",
    tags: ["GLM", "Agents", "Reasoning"],
    arxiv: "2508.06471",
    summary: "A model aimed at three capabilities at once: acting as an agent, reasoning and coding. It combines a thinking mode and a direct-answer mode in one model, and its training draws on real execution traces, tool use and environment feedback. Serving cost is treated as a first-class design goal."
  },

  /* ---------------- 2026 ---------------- */
  {
    id: "ds-09",
    lab: "deepseek",
    title: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence",
    authors: "DeepSeek-AI, Anyi Xu, et al.",
    year: 2026,
    cat: "Language models",
    tags: ["Mixture of experts", "Million-token context", "Efficiency"],
    arxiv: "2606.19348",
    summary: "A preview of the DeepSeek-V4 series: two mixture-of-experts models, V4-Pro (1.6T parameters, 49B active) and V4-Flash (284B, 13B active), both supporting a one-million-token context. The architecture combines compressed sparse and heavily compressed attention, manifold-constrained hyper-connections and the Muon optimiser. Against DeepSeek-V3.2, the report says V4-Pro needs about 27% of the inference FLOPs and 10% of the KV cache at one million tokens."
  },
  {
    id: "ds-10",
    lab: "deepseek",
    title: "DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression",
    authors: "DeepSeek-AI, Anyi Xu, et al.",
    year: 2026,
    cat: "Training & infrastructure",
    tags: ["KV cache", "FP4", "Multimodal"],
    arxiv: "2609.19969",
    summary: "A multimodal mixture-of-experts model with 552B backbone parameters and up to one million tokens of context, aimed at long-running agents where prefill and KV-cache memory dominate the cost. It reuses KV caches across layers in a second-generation compressed sparse attention and stores them in FP4, cutting the global KV footprint to roughly a quarter of DeepSeek-V4-Flash's. The model was pretrained on 45T multimodal tokens."
  },
  {
    id: "ms-07",
    lab: "moonshot",
    title: "Kimi K3: Open Frontier Intelligence",
    authors: "Kimi Team, Tongtong Bai, et al.",
    year: 2026,
    cat: "Language models",
    tags: ["Kimi", "Mixture of experts", "Open weights"],
    arxiv: "2607.24653",
    summary: "A 2.8-trillion-parameter mixture-of-experts model with 104B parameters active per token, native vision and a one-million-token context window. It is built on Kimi Delta Attention and Attention Residuals, and uses Stable LatentMoE, which activates 16 of 896 routed experts per token. The authors report about 2.5 times the scaling efficiency of Kimi K2, and release the full model weights."
  }
];
