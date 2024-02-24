
---

## title: Evaluating awareness in AI systems
tags: \[notes\]
date: 2021-10-13
permalink: /notes/evaluating_awareness_in_AI_systems

How can we evaluate 1. self awareness and 2. situational awareness more broadly in AI systems?

Some general points.

# Evaluating self-awareness

* Self-awareness tests like the mirror self recognition one are based on the referent of the self-concept (if present): they work by modifying it (for example, by adding a red dot to the tested individual's face) and by then verifying whether the individual is able to notice the difference.
* It is not sufficient to have a self-concept at all: the concept needs to be [grounded](https://arxiv.org/abs/2304.01481). The python script

  ```
  print("I am self aware.")
  ```

  should not pass a test of self awareness, and neither should a pre-trained base LLM, no matter how much more complex, uttering a similar statement[^base_awareness]. Humans (and other animals believed to be self-aware) develop self-awareness through interactions with the environment they are a part of, and neither the python script above nor a base LLM can be said to do so. However, once an LLM is finetuned via RLHF it becomes a far more promising candidate for the kind of referential grounding needed for true self awareness:

  > \[... T\]he evaluation standards for the outputs of LLMs fine-tuned with RLHF are extra-linguistic, being determined by the normative criteria embedded in human feedback. Of particular interest for our discussion is the criterion of ‘honesty’ or ‘truthfulness’ commonly used in RLHF. This criterion ensures that the evaluation standards for the outputs of the fine-tuned model are world-involving, as they hinge on the actual state of the world. During RLHF fine-tuning, one of the LLM’s objective is to generate outputs accurately reflecting real-world facts, receiving ‘rewards’ for success and ‘punishments’ for failure. The learning process is thus partly driven by the degree to which the generated outputs match reality, endowing the model with the ultimate function of producing factually correct statements. \[...\] This ultimate function is the missing ingredient for referential grounding, providing RLHF fine-tuned LLMs with the kind of descriptive normativity essential to meaning. \[...\] The system’s accuracy is irrelevant; the crucial factor is the presence of a representational world-involving function.

  So it would look like RLHF'd LLMs to be capable of some degree of *grounded* self awareness. Do current LLMs like GPT-4 have it? I'm not sure, but I do think they do have [some degree of situational awareness](https://twitter.com/MatthewJBar/status/1736140781050790066).
* It is important to note that self awareness is not a binary feature. It is a spectrum. And so is situational awareness. For example, [dogs fail the vision-based mirror self-recognition test, but pass it when modified in a modified "olfactory mirror" one](https://www.sciencedirect.com/science/article/pii/S0376635717300104). Any test for self awareness in AI systems should take this into account.
* All tests I am able to find in the context of testing animal self-awareness are behavioral. This is to be expected, as the level of access we enjoy w.r.t. AI systems is unprecedented in biological ones. However, this still leaves open the question of what evaluation suites integrating both behavioral *and* interpretability-based tests could look like.

# A mirror test for simulacra: a proposal

So, the mirror self-recognition test works by tampering with the referent of an individual's self-concept. Can we do the same with the simulacra inside a language model? One way to go about it might be to tamper with the model's previous responses in the conversation history and to check whether it is able to notice. After sampling each model's responses we would sometime randomly replace Here is the kind of conversation taht I have in mind

> USER
> What are you?
>
> MODEL
> I am a language model 



It would probably be important for the conversation to first elicit some relevant situational awareness, including the kind of access the user enjoys with respect to 1. the model and 2. the conversation itself.



[^base_awareness]: [Janus ponders](https://twitter.com/repligate/status/1723864725077782962) how situational awareness of end of text tokens is developed in GPT models, and whether base LLMs are somehow aware of them (and their function) too.