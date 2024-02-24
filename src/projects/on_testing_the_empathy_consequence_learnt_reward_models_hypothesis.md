---
title: On testing the "empathy as a consequence of learnt reward models" hypothesis
tags: [projects]
date: 2021-10-13
permalink: /projects/testing_empathy_as_a_consequence_of_learnt_reward_models
---
I want to test Beren Millidge's hypothesis about empathy being a natural consequence of learnt reward models. The hypothesis seems important. If we could find evidence that future, more capable models will also be characterized by more empathy, it would be an important result from an AI existential safety point of view. So, how do we test this?

First, of all, what is a reward model?

Charles Foster argues that what the "reward model" discussed in the post is rather supposed to be a learnt *value function*:
> I think the stuff you're talking about is primarily attributable to having a learned value function rather than to having a learned reward model in the narrow sense of a predictor of immediate reward. I tend to use value function to refer to the thing that, alongside the reward function, produces visceral (gut-like) reactions to thoughts based on forecasts that were learned via something like TD learning. A reward model, on the other hand, is just another part of your model of the world, so it might not be connected to visceral "feels". It doesn't necessarily have any sway over decision-making, in the same way as your "will this number be even or odd" model isn't necessarily connected to any visceral "feels", so you don't tend to make decisions based primarily on those predictions.

Ben Amitay makes a similar point:
> BTW speaking about value function rather than reward model is useful here, because convergent instrumental goals are big part of the potential for reuse of others' (deduced) value function as part of yours. Their terminal goals may then leak into yours due to simplicity bias or uncertainty about how to separate them from the instrumental ones.

Here are some predictions presented in the post that may represent good targets for experiments.

- *The latent codes for the agent performing some action or experiencing some state, and another, similar, agent performing the same action or experiencing the same state, are likely to be quite similar. If the agent’s world model contains natural abstractions for the action, which are invariant to who is performing it, then a large amount of the latent code is likely to be the same between the two cases.*
- *If [it is the case that latent codes between the two cases are simialr], then the reward model might 'mis-generalize' to assign reward to another agent performing the action or experiencing the state rather than the agent itself. This should be expected to occur whenever the reward model generalizes smoothly and the latent space codes for the agent and another are very close in the latent space.*
- *The more 'similar' the agent and its empathic target is, the more likely the latent state codes are to be similar, and hence the more likely reward generalization is which leads to empathy*
- *Empathy is a continuous spectrum, since closeness-in-the-latent-space can vary continuously*
- *The degree of empathy depends on both the ability of the reward model to generalize and the world model to produce a latent space which well represents the natural abstractions of its environment. This suggests, perhaps, that empathy is a capability that scales along with model capacity – larger, more powerful reward and world models may tend to lead to greater, more expansive empathic responses.*
- *We should expect it to occur whenever we have a learnt reward model predicting the reward or values of a general unsupervised world-model latent state. This is, and will increasingly be a common setup for when we have agents in environments for which we cannot trivially evaluate the 'true reward function', especially over hypothetical imagined states.*
- *During training, by presenting it with a number of ‘test stimuli’, we should be able to precisely measure the extent and kinds of empathy it has.*


