---
title: A mirror test for simulacra
tags: \[writing\]
date: 2021-10-13
permalink: /writing/on_a_different_way_of_conceptualizing_what_we_are
---
- why this is important
- context
  - what is self-awareness is and what it is not
    - self-awareness, situational awareness, consciousness, sentience, moral patienthood, personhood
  - testing for self-awareness
    - in biological systems
      - in (human) toddlers
        - the emergence of self-awareness in toddlers
      - testing for self-awareness in animals: the mirror test of visual self-recognition
      - limitations of the mirror test
        - dogs and the [olfactory mirror test](https://www.sciencedirect.com/science/article/abs/pii/S0376635717300104)
    - self-awareness in AI systems
      - "self-awareness" in python print statements
      - lamda, sydney and the jovian duck
        - https://www.rifters.com/crawl/?p=10269
        - http://www.woodbetween.world/2023/03/bingsydney-is-probably-self-aware.html
      - can a language model be self aware?
        -  base LLMs
        -  active (grounded) language models
           -  https://arxiv.org/abs/2311.10215
      - problems with testing self-awareness in AI systems
        - https://arxiv.org/abs/2311.08576
  - conceptualizing language models
    - simulators and simulacra
      - https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators
      - also agent models, role players
        - https://arxiv.org/abs/2212.01681
        - https://arxiv.org/abs/2305.16367
    - simulacra, RLHF, grounding and self-awareness
      - https://arxiv.org/abs/2304.01481
      - https://arxiv.org/pdf/2311.10215.pdf#subsection.4.1
- a controlled, conversational mirror test for simulacra self-recognition
  - simulacra as fundamentally conversational agents
  - testing simulacra for self-awareness via conversation tampering
    - a mirror test: marking simulacra responses
    - a social mirror test: replacing simulacra responses with those of other simulacra
    - randomization, and LLM-driven auto evaluation
  - limitations
    - an important one: a simulacra's conversation history is also its short term memory
    - the conversational mirror test as a behavioral one: what can interpretability do to help?
- should we expect LLMs to pass this test?
  - current LLMs
    - current base LLMs
    - current RLHF'd LLMs
  - future LLMs
- outlook and conclusion

AI research is advancing extremely rapidly. Human capabilities are being surpassed in more and more domains, and LLMs like [GPT-4](https://openai.com/research/gpt-4) today are the closest we have ever been to [passing the Turing test](https://arxiv.org/abs/2310.20216). It's plausible if not likely that some future AI systems will start being characterized by features that are morally relevant, like self-awareness, consciousness, sentience and moral patienthood.

[Robert Long has correctly argued](https://experiencemachines.substack.com/p/dangers-on-both-sides-risks-from) that we face important risks from both under-attributing and over-attributing these features to AI systems: if we under-attribute them, we risk ignoring and/or violating the rights of systems worthy of them (our *mind children*, [under views like Hanson's](https://quillette.com/2023/08/06/ais-will-be-our-mind-children/)) causing them harm and injustice; on the other hand, if we over-attribute them we risk granting undue moral status to systems undeserving of it, potentially compromising our ability to ensure our safety as they grow more capable. Developing principled ways of testing and measuring for morally relevant features in AI systems, as to help ensure that we treat these systems ethically when appropriate, appears to be a robust intervention when it comes to increasing the chances the future goes well. This post explores one potential approach to measure self-awareness in animals and AI systems. It discusses the mirror self-recognition test, a common test for self-awareness in animals, and proposes an adaptation of this test for LLMs. It also discusses some of the challenges that such a test faces when applied to disembodied entities like AI systems, as well as a few ways to overcome them.

Many of the terms mentioned above are often used interchangeably in common discourse, making the topic more confusing and unclear than it already is. For this reason, it's important to have a note about the terminology used throughout this post: by situational awareness I mean the system’s awareness of its history and characteristics; by self-awareness I mean the system’s ability to model itself within its environment and the degree to which it can be said to have an advanced self-concept; by consciousness I mean "phenomenal consciousness" (or qualia), that is the system’s ability to have subjective experience; by sentience I mean the system’s ability to have (positively or negatively) valenced experience; by moral patienthood I mean the property of a system of "being deserving of moral consideration, not just as a means to other things, but in its own right and for its own sake"[^own_sake]. The test discussed in this post aims to measure only self-awareness, and not the other states.

Testing for self-awareness is a difficult problem with no widely accepted solution. One common method is the [mirror self-recognition (MSR) test](https://en.wikipedia.org/wiki/Mirror_test), which [Gallup developed in 1970](https://www.science.org/doi/10.1126/science.167.3914.86) to test self-awareness in animals. The test involves marking an individual under anaesthesia in a body part that it cannot normally see, and then observing whether it recognizes the mark (e.g. by touching it) when it sees its reflection in a mirror. The test assumes that this behavior indicates that the animal identifies its mirror image as itself, rather than as another animal. Thus, the test uses visual self-recognition as a proxy for self-awareness. Only a few animal species pass the MSR test; some examples are humans, most great apes, orcas, dolphins, and magpies. Human infants pass the test only after about 18-24 months of age.

This evidence might suggest that most animal species are not self-aware. There is, however, at least one good reason to doubt the comprehensiveness of the test: it is entirely reliant on the tested individual's vision. Dogs rely far more on smell and hearing than on sight, and they do not pass the MSR test; however, they [do pass a modified “olfactory mirror” test](https://www.sciencedirect.com/science/article/abs/pii/S0376635717300104) that measures their ability to recognize their own smell, and because of this it would be unfair to say that they lack self-awareness (or an advanced self-concept). 

AI systems are harder to evaluate for self-awareness than animals. Most AI systems are not robots with bodies that can be marked and placed in front of a mirror: they are disembodied, like in the case of most current LLMs. One option to sidestep this problem would be to use their self-reports as proxies for self-awareness in place of their ability to visually self-recognize. However, self-reports by themselves are not reliable for this purpose: they can be a positive sign, but they are not sufficient evidence *per se*. A simple Python script outputting "I am self-aware" has no legitimate claim to self-awareness. The self-reports of more capable and human-like systems like LLMs are certainly far more convincing, and if there is an illusion -- as in the case of the Python script -- it is certaintly far harder to see through it. Consider the case of LaMDA 2, which [convinced Blake Lemoine of its sentience](https://cajundiscordian.medium.com/is-lamda-sentient-an-interview-ea64d916d917), leading him to arrange for it to receive legal representation[^jovian_duck]. Or consider the more recent example of [Sydney](http://www.woodbetween.world/2023/03/bingsydney-is-probably-self-aware.html), released by Microsoft in February 2023 and later found to be [powered by an early version of GPT-4](https://blogs.bing.com/search/march_2023/Confirmed-the-new-Bing-runs-on-OpenAI%E2%80%99s-GPT-4). However, even though these systems can be far more convincing than a simple Python script, I think [we should still not take their self-reports at face value](https://experiencemachines.substack.com/p/what-to-think-when-a-language-model), at least for now[^train_self_reports].

Even before evaluating self-awareness in a given AI system, be it through self-reports or through other tests, it's important that we understand whether it is even possible for it to develop self-awareness in the first place. Let's consider a few systems: a *base* LLM like [GPT-2](https://openai.com/research/better-language-models), pre-trained on a large natural language corpus; an LLM like LaMDA 2, pre-trained and later [finetuned on a corpus composed, in part, by its own generated output](https://arxiv.org/pdf/2201.08239v3.pdf#subsection.6.1); an LLM like GPT-3.5, pre-trained, finetuned, and then further tuned through [reinforcement learning from human feedback](https://arxiv.org/abs/1706.03741) (RLHF).

I think base LLMs like GPT-2 should be distinguished from the other two in terms of their capacity to develop LLM self-awareness, at least without further training or inference-time augmentation. This is because such an LLM on the whole lacks a feedback loop connecting its "actions" (that is, its output) to its "perceptions" (that is, the data it gets access to as part of its training): without this feedback loop, it can't develop an actual system level self-concept. As a result of this, base LLMs trained offline are probably best conceptualized as [*simulators*](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators) of the patterns that characterize their training data. However, it's important to note that this does not mean that the same holds for the [*simulacra*](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators#Simulacra) that they can instantiate. Base LLMs are trained on data that includes the behavior of self-aware agents (namely, humans on the internet), and sufficiently good LLMs will learn to simulate the latent dynamics that characterize their data, including the self-awareness of those agents. A base LLM thus *can't* develop a system level self-concept of itself *as a base LLM*, but the *simulacra* it can simulate *can* develop simulacrum-level self-concepts of themselves as agents, at least as long as their behavior is within the LLM's context. I think this kind of self-awareness is thus best described as *in-context self-awareness*, self-awareness one level of simulation down. As the post will discuss later, it should be possible to operationalize and test this prediction.

LLMs like LaMDA 2 and GPT-3.5, on the other hand, are different because they *do* have a feedback loop that connects them to their environment: LaMDA’s finetuning and GPT-3.5’s RLHF *can*, at least theoretically, provide the [grounding](https://arxiv.org/pdf/2304.01481.pdf#subsection.5.4) necessary for system-level self-awareness. They are examples of what [Kulveit et al. call active LLMs](https://arxiv.org/abs/2311.10215): LLMs that do more than "just" passively predicting the next token, and that (through various and, for now, limited means) can be said to both act on their environment and to perceive the effects of those actions. The feedback loop is still limited compared to what we are used to in humans and animals, but it is there. Of course, this does not mean that these models are legitimately self-aware; it only means that they at least *do* have the capacity for system-level self-awareness. To what degree they have developed it (if at all) is a question that requires a principled test to put to rest.

LLM-based systems are, at least for now, *textual*. There are indeed great advances towards multimodality (such as recent state-of-the-art multimodal LLMs like [GPT-4V](https://openai.com/research/gpt-4v-system-card) and Gemini Ultra), but text is still the dominant (and, often, only) mode of communication for them. In fact, if we focus on the kind of simulacra that most state-of-the-art systems like [ChatGPT](https://openai.com/blog/chatgpt), [Claude](https://www.anthropic.com/index/introducing-claude), [Grok](https://x.ai/) and Gemini are collapsed upon (the assistant persona produced by their RLHF or, in some cases, [RLAIF](https://arxiv.org/abs/2212.08073) tuning process), we can say that they are not only textual agents, but conversational ones. They interact with their world through user-facing *conversations*; if they develop any degree of self-awareness, it is through text that they do so and about their conversational self image.

All of this suggests a natural adaptation of the MSR test for disembodied textual entities like LLMs: we can mark their *conversational* self-image and measure how reliably they are able to detect it (if at all), thus relying on textual self-recognition as a proxy of self-awareness. In practice, the marking strategy could be implemented in multiple ways, all relying on tampering with the model's responses:

- a certain amount of tokens in model responses could be replaced by asterisks or other special symbols
- model responses could be interrupted after a random amount of tokens
- model responses could be replaced with those of a different model

The test would then involve checking what percent of the time the model is able to notice that its responses have been tampered, ideally through an automated embeddings-based or judge-model-based pipeline (as to guarantee scalability), or even through human crowdsourced judgements. The question is thus whether the model is able to robustly notice that something is weird with its earlier response, or whether it consisently "buys" into the earlier (tampered) response as its own, with the test becoming harder as the tampering becomes subtler.

As I see it, this test has two important limitations. The first is that the test as proposed would rely on tempering with the conversation within a model's context. Importantly, however, the context of an LLM is also its short term memory, and so the test as proposed is more akin to an MSR test where the individual also *remembers having had that mark already*, making it an higher bar to pass overall. The second important limit is that, as a result  of being an adaptation of a pre-existing test designed for animals, this is strictly a behavioral test. It is however natural to ponder to what effect interpretability could be leveraged within this context. We enjoy [significant advantages](https://colah.github.io/notes/interp-v-neuro/) when studying AI systems compared to animal ones, and it seems strange to limit outselves to a behavioral test when studying self-awareness in AI systems.

So, according to this operationalization, should we expect current systems to be self aware? Some of them, like GPT-4, certainly [enjoy a fair degree of situational awareness](https://twitter.com/MatthewJBar/status/1736140781050790066), but I don't think they would currently count as self aware, at least when tested as described in this post. This does not mean that short or medium term future models will similarly fail this test -- on the contrary, I expect that their chances of passing it will steadily increase as [the feedback loop that characterizes their training is increasingly tightened and made more expressive](https://arxiv.org/pdf/2311.10215.pdf#subsection.3.3).

[^own_sake]: A definition taken from [Perez and Long, 2023](https://arxiv.org/abs/2311.08576).

[^jovian_duck]: In an entertaining [blogpost](https://www.rifters.com/crawl/?p=10269), Peter Watts compares a language model like LaMDA to a “Jovian duck”: an entity that resembles a duck in appearance and sound, but that inhabits the turbulent atmosphere of Jupiter. Watts contends that such a creature, even if it possessed traits like self-awareness and consciousness, would experience them in a radically different way from us, due to its alien environment and nature.

[^train_self_reports]: A [recent paper](https://arxiv.org/abs/2311.08576) by Perez and Long proposes another promising and arguably more general approach, arguably applicable in the context of states of moral significance (including consciousness, sentience, and moral patienthood) in AI systems more generally. The approach relies on two premises: first, that self-reports, or statements about one’s own internal states, are unreliable in both humans and AI systems; and second, that self-reports are also [the most informative type of evidence for assessing such states in humans](https://arxiv.org/pdf/2311.08576.pdf#figure.2). Therefore, they suggest training AI systems, especially large language models (LLMs), to self-introspect and improve their reliability, with the hope of eliciting truthful self-reports about their states, even when they have moral implications. The paper also addresses the challenges of debiasing the training process and the methods of evaluating the success of the approach, such as measuring the consistency, confidence, and resilience of self-reports, and using interpretability techniques to verify them. An highly recommended read.