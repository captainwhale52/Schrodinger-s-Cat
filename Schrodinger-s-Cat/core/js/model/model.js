/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" /> 
var Asthma_Complete = false;
var Asthma_Mother_Know_Wound = false;
var Asthma_Out_Bed = false;
var Asthma_Grab_Rock = false;
var Asthma_Take_Out_Glass = false;
var Asthma_On_First_Floor = false;
var Asthma_Grab_Broom = false;
var Asthma_Broom_Second_Floor = false;
var Asthma_Shout_To_Mother = false;
var Cat_Complete = false;
var Cat_Go_Outside_Find_Cat = false;
var Cat_Go_Outside_With_Broom = false;
var Cat_Go_Outside_With_Inhaler = false;
var Cat_Throw_Inhaler_Window = false;
var Cat_Believe_Dad_Died = false;
var Love_Complete = false;
var Love_Lost_Broom = false;
var Love_Lost_Shoe = false;
var Love_Try_Trade_Taeser = false;
var Love_Try_Trade_Food = false;
var Love_Grab_Broom = false;
var Love_Get_Food = false;
var Love_Open_Door = false;
var Love_Lost_One_Inhaler = false;
var Variable_Array = new Array('Asthma_Complete', 'Asthma_Mother_Know_Wound', 'Asthma_Out_Bed', 'Asthma_Grab_Rock', 'Asthma_Take_Out_Glass', 'Asthma_On_First_Floor', 'Asthma_Grab_Broom', 'Asthma_Broom_Second_Floor', 'Asthma_Shout_To_Mother', 'Cat_Complete', 'Cat_Go_Outside_Find_Cat', 'Cat_Go_Outside_With_Broom', 'Cat_Go_Outside_With_Inhaler', 'Cat_Throw_Inhaler_Window', 'Cat_Believe_Dad_Died', 'Love_Complete');
var SchrodingersCat;
(function (SchrodingersCat) {
    var Model = (function () {
        function Model() {
            this.initializeChapters();
            this.initializePassages(0);
            this.mVariables = new SchrodingersCat.Variables();
        }
        Model.prototype.getCurChapterNumber = function () {
            return this.curChapterNumber;
        };
        Model.prototype.setCurChapterComplete = function () {
            if (this.curChapterNumber == 1) {
                Asthma_Complete = true;
                SCM.getVariables().addVariable('Asthma_Complete', 'true');
            }
            else if (this.curChapterNumber == 2) {
                Cat_Complete = true;
                SCM.getVariables().addVariable('Cat_Complete', 'true');
            }
            else if (this.curChapterNumber == 3) {
                Cat_Complete = true;
                SCM.getVariables().addVariable('Love_Complete', 'true');
            }
            this.initializeChapters();
        };
        Model.prototype.initializeChapters = function () {
            var that = this;
            this.mChapters = new SchrodingersCat.Chapters();
            that.mChapters.add(new SchrodingersCat.Chapter({ name: "HOME", cid: 0, hash: "#home", cnum: "", passage: "", visible: true, hide: false }));
            that.mChapters.add(new SchrodingersCat.Chapter({ name: "Asthma", cid: 1, hash: "#act/1", cnum: "01", passage: "asthma-begin", visible: true, hide: false, image: "bg_chapter1.jpg", blur: "bg_chapter1_blur.jpg" }));
            if (Asthma_Complete == true) {
                that.mChapters.add(new SchrodingersCat.Chapter({ name: "The Cat", cid: 2, hash: "#act/2", cnum: "02", passage: "cat-begin", visible: true, hide: false, image: "bg_chapter2.jpg", blur: "bg_chapter2_blur.jpg" }));
            }
            else {
                that.mChapters.add(new SchrodingersCat.Chapter({ name: "The Cat", cid: 2, hash: "#act/2", cnum: "02", passage: "cat-begin", visible: false, hide: false, image: "bg_chapter2.jpg", blur: "bg_chapter2_blur.jpg" }));
            }
            if (Cat_Complete == true) {
                that.mChapters.add(new SchrodingersCat.Chapter({ name: "The Love", cid: 3, hash: "#act/3", cnum: "03", passage: "love-begin", visible: true, hide: false, image: "bg_chapter3.jpg", blur: "bg_chapter3_blur.jpg" }));
            }
            else {
                that.mChapters.add(new SchrodingersCat.Chapter({ name: "The Love", cid: 3, hash: "#act/3", cnum: "03", passage: "love-begin", visible: false, hide: false, image: "bg_chapter3.jpg", blur: "bg_chapter3_blur.jpg" }));
            }
            if (Love_Complete == true) {
                that.mChapters.add(new SchrodingersCat.Chapter({ name: "- The End -", cid: 4, hash: "", cnum: "", passage: "", visible: false, hide: true }));
            }
            else {
                that.mChapters.add(new SchrodingersCat.Chapter({ name: "- The End -", cid: 4, hash: "", cnum: "", passage: "", visible: false, hide: true }));
            }
            that.mChapters.sort();
        };
        Model.prototype.updateVariables = function () {
            this.initializeVariables(this.curChapterNumber);
        };
        Model.prototype.initializeVariables = function (cnum) {
            var that = this;
            if (cnum == 1) {
                Asthma_Complete = false;
                Asthma_Out_Bed = false;
                Asthma_Mother_Know_Wound = false;
                Asthma_Grab_Rock = false;
                Asthma_Take_Out_Glass = false;
                Asthma_On_First_Floor = false;
                Asthma_Grab_Broom = false;
                Asthma_Broom_Second_Floor = false;
                Asthma_Shout_To_Mother = false;
                //
                Cat_Complete = false;
                Cat_Go_Outside_Find_Cat = false;
                Cat_Go_Outside_With_Broom = false;
                Cat_Throw_Inhaler_Window = false;
                Cat_Believe_Dad_Died = false;
                //
                Love_Complete = false;
                Love_Lost_Broom = false;
                Love_Lost_Shoe = false;
                Love_Try_Trade_Taeser = false;
                Love_Try_Trade_Food = false;
                Love_Grab_Broom = false;
                Love_Get_Food = false;
                Love_Open_Door = false;
                Love_Lost_One_Inhaler = false;
                $.each(that.mVariables.models, function (index, model) {
                    if (model.get('act') == 1) {
                        model.save({
                            value: 'false',
                        }, {
                            wait: true,
                            success: function (model, response) {
                                console.log(model.get('name') + ": " + model.get('value'));
                            },
                            error: function (error) {
                                console.log("error");
                            },
                        });
                    }
                });
                SCM.getVariables().addVariable('Cat_Complete', 'false');
                SCM.getVariables().addVariable('Love_Complete', 'false');
            }
            else if (cnum == 2) {
                Cat_Complete = false;
                Cat_Go_Outside_Find_Cat = false;
                Cat_Go_Outside_With_Broom = false;
                Cat_Throw_Inhaler_Window = false;
                Cat_Believe_Dad_Died = false;
                //
                Love_Complete = false;
                Love_Lost_Broom = false;
                Love_Lost_Shoe = false;
                Love_Try_Trade_Taeser = false;
                Love_Try_Trade_Food = false;
                Love_Grab_Broom = false;
                Love_Get_Food = false;
                Love_Open_Door = false;
                Love_Lost_One_Inhaler = false;
                $.each(that.mVariables.models, function (index, model) {
                    if (model.get('act') == 2) {
                        model.save({
                            value: 'false',
                        }, {
                            wait: true,
                            success: function (model, response) {
                                console.log(model.get('name') + ": " + model.get('value'));
                            },
                            error: function (error) {
                                console.log("error");
                            },
                        });
                    }
                    else {
                        if (model.get('act') == 1) {
                            console.log(model.get('name') + ": " + model.get('value'));
                        }
                    }
                });
                SCM.getVariables().addVariable('Love_Complete', 'false');
            }
            else if (cnum == 3) {
                Love_Complete = false;
                Love_Lost_Broom = false;
                Love_Lost_Shoe = false;
                Love_Try_Trade_Taeser = false;
                Love_Try_Trade_Food = false;
                Love_Grab_Broom = false;
                Love_Get_Food = false;
                Love_Open_Door = false;
                Love_Lost_One_Inhaler = false;
                $.each(that.mVariables.models, function (index, model) {
                    if (model.get('act') == 3) {
                        model.save({
                            value: 'false',
                        }, {
                            wait: true,
                            success: function (model, response) {
                                console.log(model.get('name') + ": " + model.get('value'));
                            },
                            error: function (error) {
                                console.log("error");
                            },
                        });
                    }
                    else {
                        if (model.get('act') == 1 || model.get('act') == 2) {
                            console.log(model.get('name') + ": " + model.get('value'));
                        }
                    }
                });
            }
            //////////////////
            setTimeout(function () {
                SCM.initializeChapters();
                SCM.initializePassages(cnum);
                var passage = SCM.getPassages().findWhere({ name: SCM.getChapters().findWhere({ cid: cnum }).get("passage") });
                SCV.renderContents(passage, SCM.getChapters().findWhere({ cid: cnum }), SCM.getChapters().findWhere({ cid: (cnum + 1) }));
                //SCV.getChapterHeader().renderChapter(SCM.getChapters().findWhere({ cid: cnum }));
                //SCV.getNextChapter().renderChapter(SCM.getChapters().findWhere({ cid: (cnum + 1) }));
                SCV.getLoader().animatedHide();
                SCP.playBG(cnum);
            }, 500);
        };
        Model.prototype.updatePassages = function () {
            this.initializePassages(this.curChapterNumber);
        };
        Model.prototype.initializePassages = function (cnum) {
            var that = this;
            that.curChapterNumber = cnum;
            that.mPassages = new SchrodingersCat.Passages();
            if (cnum == 1) {
                // act 1: asthma-begin
                var passage = new SchrodingersCat.Passage({ name: 'asthma-begin', isLast: false, first: 'Y', context: '<p>ou\'re walking in a gray dusty area. You can\'t remember why you\'re here. Maybe, you\'re looking for the way to your house. Slowing down, you look up at the sky. Light comes through just above the horizon, but you\'re not sure whether it\'s sunrise or sunset, since thick dark dust is swallowing most of the light. Suddenly, the dust cloud becomes bigger and bigger until even you\'re consumed. Although you try to hold your breath as much as you can, you realize that your lungs are not strong enough. Covering your mouth and nose with your hands, you take one last deep breath. Feeling suffocated, you desparately clench your neck with your hands.</p><p>CLINK!</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '<i>Where am I?</i>', next: 'asthma-begin2', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-begin2
                var passage = new SchrodingersCat.Passage({ name: 'asthma-begin2', isLast: false, first: '', context: '<p>You roll your eyes to check where you are. Everything is familiar. It must have been just a dream. Taking a few deep breaths, and removing your hands from your neck, you use your arms as props to raise yourself up from the bed.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Look around to check the source of noise.', next: 'asthma-check-sound-yes', variable: 'Asthma_Out_Bed', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Fall back on the bed.', next: 'asthma-check-sound-no', variable: 'Asthma_Out_Bed', value: 'false' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-check-sound-yes
                var passage = new SchrodingersCat.Passage({ name: 'asthma-check-sound-yes', isLast: false, context: '<p>You notice broken pieces of glass scattered on the ground. <i>Who did this?</i> The curiosity urges you to leave the bed, and tip toe to the window. Streching yourself as far as you can, you look down onto the street to find a suspect; but no one is on the street. With a sigh, you look up, the thick dusty air is covering the entire city with darkness. A small light breaks through the horizon, but it could be morning or evening.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Keep looking at gloomy city.', next: 'asthma-keep-looking-yes', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Look back in your room', next: 'asthma-keep-looking-no', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-keep-looking-yes
                var passage = new SchrodingersCat.Passage({
                    name: 'asthma-keep-looking-yes',
                    isLast: false,
                    context: '<p>Many buildings are fully or partially destroyed. <i>How bleak the city is now...</i> With a sigh, you inhale the air from outside. Another fit of coughting seizes you. Covering your mouth, you stare outside despite a dry hacking coughing, because you still have hope that...<i> Wait a sec...</i></p><p>Something is coming toward you. You hide behind the window frame. As the figure comes closer to you, you recognize red hair, and a dark brown coat of your mom\'s.</p>'
                });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Run downstairs to greet mom.', next: 'asthma-greet-mother-yes', variable: 'Asthma_Take_Out_Glass', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Run back to bed to pretend sleeping.', next: 'asthma-greet-mother-no', variable: 'Asthma_Take_Out_Glass', value: 'false' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-greet-mother-yes
                var passage = new SchrodingersCat.Passage({ name: 'asthma-greet-mother-yes', isLast: false, context: '<p>Overexcited, you forgot about the glass around you. <i>YOW!</i> Feeling a sharp and cutting pain in your left heel, you move foward one more step to grab the rock, and hop into your bed. Holding your left foot with left hand, and biting your lower lip, you pull the glass out.</p><p>"Ouch!"</p><p>Suddenly, the loud squeaking noise of the wooden door reaches you. After a few seconds, you hear someone coming up the stairs.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Wrap your foot with bed sheet, and lie on the bed quickly.', next: 'asthma-cover-wound-yes', variable: 'Asthma_Mother_Know_Wound', value: 'false' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Stay sitting on the bed holding your foot with your hand.', next: 'asthma-hostile-mom-yes', variable: 'Asthma_Mother_Know_Wound', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-greet-mother-no
                var passage = new SchrodingersCat.Passage({ name: 'asthma-greet-mother-no', isLast: false, context: '<p>Rushing, you forget about the glass around you. <i>YOW!</i> Feeling a sharp and cutting pain in your left heel, you move foward one more step to grab the rock, and hop into your bed. Holding your left foot with left hand, and biting your lower lip, you pull the glass out.</p><p>"Ouch!"</p><p>Suddenly, the loud squeaking noise of the wooden door reaches you. After a few seconds, you hear someone coming up the stairs. You cover your foot with the bed sheet, and lie on the bed quickly.</p><p>Even though your eyes are closed, you can hear sound of your door opening.</p><p>"Gilly, get up. I know you are awake."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Hi, Mom. You came back now?"', next: 'asthma-hostile-mom-no', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"What, Anne?"', next: 'asthma-hostile-mom-yes', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-keep-looking-no
                var passage = new SchrodingersCat.Passage({ name: 'asthma-keep-looking-no', isLast: false, context: '<p>You look around your room. There is a long horizontal mirror on the wall. Unlike other sixteen year old girls, you don\'t like mirrors. Everytime you look at the mirror, the only thing that you can notice is the growing dark circles around your eyes. While turning your head back away from the mirror, you stumble on a rock on the floor.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"What\'s that?"', next: 'asthma-grab-rock-yes', variable: 'Asthma_Grab_Rock', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Damn people!"', next: 'asthma-grab-rock-no', variable: 'Asthma_On_First_Floor', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-grab-rock-no
                var passage = new SchrodingersCat.Passage({ name: 'asthma-grab-rock-no', isLast: false, context: '<p>You check again the last window in your room is smashed. <i>They did this.</i> Because of your dad, Dr. Graff... <i>It\'s better to clean up.</i> Lifting your heels, you walk carefully around the pieces of glass. You remember where your mom put the broomstick. The squeaking sound of the wooden door echoes in the house as you pull the door towards you. You try to minimize your weight on the wooden stairs, but it only makes your steps louder. When you\'re about to grab the broom on the porch, you notice someone is approaching your house.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Grab the broom and hide behind the wall.', next: 'asthma-grab-broom-yes', variable: 'Asthma_Grab_Broom', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Leave the broom and hide behind the wall.', next: 'asthma-grab-broom-no', variable: 'Asthma_Grab_Broom', value: 'false' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-grab-broom-yes
                var passage = new SchrodingersCat.Passage({ name: 'asthma-grab-broom-yes', isLast: false, context: '<p>Heavily pounding heart beat fades all other noises. Taking a firm grip of the stick, you stay still.</p><p>"Gilly?"</p><p>Holding up the broom stick, you recognize the red hair, and the brown coat. It\'s your mom. She gently grabs the broom stick and you hand it over to her. She embraces your face with her arms.</p><p>"Gilly, it\'s ok. It\'s ok."</p><p>She examines your face thumbing your cheeks thoroughly, peering from every angle. You notice her eyes are dilated. But you notice more than that; there is a redish bruise around her right eyebrow. You didn\'t notice when she came into your room since it was partially covered with her red hair.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, what happened?"', next: 'asthma-bruise-ask-mother', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Lift your right hand to check her bruise.', next: 'asthma-bruise-check', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-grab-broom-no
                var passage = new SchrodingersCat.Passage({ name: 'asthma-grab-broom-no', isLast: false, context: '<p>Heavily pounding heart beat fades all other noises. Taking a firm grip of the stick, you stay still.</p><p>"Gilly?"</p><p>Holding up the broom stick, you recognize the red hair, and the brown coat. It\'s your mom. She hold your hands.</p><p>"Gilly, it\'s ok. It\'s ok."</p><p>She examines your face thumbing your cheeks thoroughly, peering from every angle. You notice her eyes are dilated. But you notice more than that; there is a redish bruise around her right eyebrow. You didn\'t notice when she came into your room since it was partially covered with her red hair.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, what happened?"', next: 'asthma-bruise-ask-mother', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Lift your right hand to check her bruise.', next: 'asthma-bruise-check', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-check-sound-no
                var passage = new SchrodingersCat.Passage({ name: 'asthma-check-sound-no', isLast: false, context: '<p>It\'s not the first time that you have had this dream; in fact, you have had it quite frequently. <i>That is probably because the dusty air in the city after the city was bombed.</i> You turn your head, and look at the mirror on the wall. Red hair, gray eyes, skinny body... Nothing special, except the dark circles around your eyes seem even darker today. While turning your head back away from the mirror, you stumble on a rock. The rock is wrapped with some kind of paper.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"What\'s that?"', next: 'asthma-grab-rock-yes', variable: 'Asthma_Grab_Rock', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Damn people!"', next: 'asthma-grab-rock-no', variable: 'Asthma_On_First_Floor', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-grab-rock-yes
                if (!Asthma_Out_Bed) {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-grab-rock-yes', isLast: false, context: '<p>On your tippy toes, you slowly approach to the rock. Your muscleless legs don\'t help that much for keeping yourself in balance. <i>YOW!</i> Feeling a sharp and cutting pain in your left heel, you move foward one more step to grab the rock, and hop into your bed. Holding your left foot with left hand, and biting your lower lip, you pull the glass out.</p><p>"Ouch!"</p><p>Suddenly, the loud squeaking noise of the wooden door reaches you. After a few seconds, you hear someone coming up the stairs.</p>' });
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-grab-rock-yes', isLast: false, context: '<pOn your tippy toes, you slowly approach to the rock. Your muscleless legs don\'t help that much for keeping yourself in balance. <i>YOW!</i> Feeling a sharp and cutting pain in your left heel, you move foward one more step to grab the rock, and hop into your bed. Holding your left foot with left hand, and biting your lower lip, you pull the glass out.</p><p>"Ouch!"</p><p>Suddenly, the loud squeaking noise of the wooden door reaches you. After a few seconds, you hear someone coming up the stairs.</p>' });
                }
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Wrap your foot with bed sheet, and lie on the bed quickly.', next: 'asthma-cover-wound-yes', variable: 'Asthma_Mother_Know_Wound', value: 'false' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Stay sitting on the bed holding your foot with your hand.', next: 'asthma-hostile-mom-yes', variable: 'Asthma_Mother_Know_Wound', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-cover-wound-yes
                var passage = new SchrodingersCat.Passage({ name: 'asthma-cover-wound-yes', isLast: false, context: '<p>"Gilly!"</p><p>You bury your face into a pillow.</p><p>"Gilly!"</p><p>Though your left foot is still in pain, you try not to show a grimace on your face. With heavily-lidded eyes...</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Hi, Mom. You came back now?"', next: 'asthma-hostile-mom-no', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"What, Anne?"', next: 'asthma-hostile-mom-yes', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-hostile-mom-yes
                var passage = new SchrodingersCat.Passage({ name: 'asthma-hostile-mom-yes', isLast: false, context: '<p>"Gilly, I heard your scream. And what happened to your window?"</p><p>Your defiant eyes ask her to leave the room. But at the same time, you notice a redish bruise around her eyebrow.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Nothing. Just leave me alone, OK?"', next: 'asthma-ask-leave-alone', variable: 'Asthma_Shout_To_Mother', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '"You tell me what happened to your face, then I will tell what happened to the window."', next: 'asthma-bruise-assume-truth', variable: 'Asthma_Shout_To_Mother', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-ask-leave-alone
                if (Asthma_On_First_Floor) {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-ask-leave-alone', isLast: false, context: '<p>"Did they do this?"</p><p>Without saying any word, you ascend the stairs, and close the door behind you. <i>They...</i> Not us... They blame your family because they believe that your dad\'s experiment caused the city to get bombed. For this reason, your family is isolated from others in this post-apocalyptic world; they even harass your mom. She doesn\'t want to tell you the truth, but her attitude to protect you makes you mad at her. But you hate yourself more; you can neither go outside, nor do anything when she is in danger. Pitiful though it maybe, yelling at her is only thing that you can do.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Lift your head not to cry.', next: 'asthma-ask-leave-alone2', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-ask-leave-alone', isLast: false, context: '<p>"Did they do this? What\'s wrong with you Gilly? You haven\'t talked with me for a month."</p><p>Without saying any word, you point out to the door with your left index finger.</p><p>With sighing, she walks out the room. After watching the door closed, you relax your eyes. <i>They...</i> Not us... They blame your family because they believe that your dad\'s experiment caused the city to get bombed. For this reason, your family is isolated from others in this post-apocalyptic world; they even harass your mom. She doesn\'t want to tell you the truth, but her attitude to protect you makes you mad at her. But you hate yourself more; you can neither go outside, nor do anything when she is in danger. Pitiful though it maybe, yelling at her is only thing that you can do.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Lift your head not to cry.', next: 'asthma-ask-leave-alone2', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 1: asthma-ask-leave-alone2
                var passage = new SchrodingersCat.Passage({ name: 'asthma-ask-leave-alone2', isLast: true, context: '<p>It doesn\'t help to control your emotion. Suddenly, everything blurs. You gasp for air, still trying to force the whimpers down. With every breath the air is less and less filling. You clench your neck as your chest tightens. Your gasps echo, like hicuups.</p><p>"Gilly! Gilly!! Hang on!"</p><p>You hear squeaking noise of stairs of her mother running up to you. Barely standing up, you grasp for an inhaler with right hand, but everything around you is blurred. Feeling like walking inside of thick fog, you slowly move your steps forward.</p>' });
                var choices = new SchrodingersCat.Choices();
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-hostile-mom-no
                var passage = new SchrodingersCat.Passage({ name: 'asthma-hostile-mom-no', isLast: false, context: '<p>"Gilly, Are you ok? I heard scream of yours."</p><p>You strech your left arm out and give a big yawn.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"No, you must have misheard. It was not mine."', next: 'asthma-pretend-misheard', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Nothing, I just had a bad dream."', next: 'asthma-mom-unwrap-rock', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-pretend-misheard
                var passage = new SchrodingersCat.Passage({ name: 'asthma-pretend-misheard', isLast: false, context: '<p>"I\'m sure it was yours. Then what are these on the floor? What are you hiding, Gilly?"</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I have no idea about this. I think I heard some noise, but I thought it happened in my dream."', next: 'asthma-mom-unwrap-rock', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"I told you it was NOT mine! Just leave me alone!"', next: 'asthma-ask-leave-alone', variable: 'Asthma_Shout_To_Mother', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-mom-unwrap-rock
                if (Asthma_Grab_Rock) {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-mom-unwrap-rock', isLast: false, context: '<p>"It seems that you have had a lot of bad dreams on these days. I am worried about your condition. Are you all right?"</p><p>As she comes toward you, you notice the small bloodstain on the bed sheet. You draw up your knees to bring the bed sheet toward you to hide it. However, as you move the bed sheet, the rock under the bed sheet is revealed. She picks up the rock and sits next to you.</p><p>"Wha\'s this?"</p><p>She glances at you suspiciously, but you shake your head silently. She unwraps paper from the rock, and you\'re watching her hands. After a few seconds, her hand starts tembling.</p>' });
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-mom-unwrap-rock', isLast: false, context: '<p>"It seems that you have had a lot of bad dreams on these days. I am worried about your condition. Are you all right?"</p><p>As she comes toward you, you notice the small bloodstain on the bed sheet. You draw up your knees to bring the bed sheet toward you to hide it. <i>She will notice it.</i> She is about to put her left hand right onto the blood spot, but instead, she lowers her body and grabs the rock on the floor.</p><p>"Wha\'s this?"</p><p>She glances at you suspiciously, but you shake your head silently. She unwraps paper from the rock, and you\'re watching her hands. After a few seconds, her hand starts tembling.</p>' });
                }
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Give me that."', next: 'asthma-paper-grab', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-paper-grab
                var passage = new SchrodingersCat.Passage({ name: 'asthma-paper-grab', isLast: false, context: '<p>Moving closer toward her, you snatch the paper from her hands.</p><p>"DIE! Graffs!"</p><p>The curse words with red color seem like blood. You look up at her face, and notice her gray eyes are slightly dilated with tears. But, there is more than that; there is a redish bruise around her right eyebrow. You didn\'t notice when she came into your room since it was partially covered with her red hair.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, what happened?"', next: 'asthma-bruise-ask-mother', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Lift your right hand to check her bruise.', next: 'asthma-bruise-check', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-bruise-check
                var passage = new SchrodingersCat.Passage({ name: 'asthma-bruise-check', isLast: false, context: '<p>You brush her hair with your index finger. The wound is worse than you thought. In surprise, she grabs your hand in haste.</p><p>"Gilly, what\'s the blood on your hand?"</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"It\'s nothing. Leave me alone."', next: 'asthma-ask-leave-alone', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Mom. Don\'t change the subject. I need to know what happened."', next: 'asthma-bruise-ask-truth', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-bruise-ask-mother
                if (Asthma_On_First_Floor) {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-bruise-ask-mother', isLast: false, context: '<p>"Don\'t worry. It\'s nothing."</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom, Don\'t lie to me! Tell me what happened."', next: 'asthma-bruise-ask-truth', variable: '', value: '' }));
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom, it this what I think?"', next: 'asthma-bruise-assume-truth', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-bruise-ask-mother', isLast: false, context: '<p>"Don\'t worry. It\'s nothing."</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom, Don\'t lie to me! Tell me what happened."', next: 'asthma-bruise-ask-truth', variable: '', value: '' }));
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom, it this what I think?"', next: 'asthma-bruise-assume-truth', variable: 'Asthma_Broom_Second_Floor', value: 'true' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 1: asthma-bruise-assume-truth
                if (Asthma_On_First_Floor) {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-bruise-assume-truth', isLast: false, context: '<p>"It\'s not what you think. Wait here, I will be back."</p><p>You\'re convinced that they did this to her, the same people who broke your window. They blame your family because they believe your father\'s experiment provoked the enemy. Your dad didn\'t talk much about his experiment, so the only thing you know is he is a genetic researcher working for the government. You cannot ask your mom about dad, since she always ends up sobbing everytime you mention him.</p><p>She comes back only after taking off her coat, but you notice she puts some cosmetic powder on her face.</p>' });
                    that.mPassages.add(passage);
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom. It\'s ok to tell me the truth. I already know what happened."', next: 'asthma-bruise-ask-truth', variable: '', value: '' }));
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom! I really hate you when you act like this. Leave me alone, and don\'t bother me till dinner!"', next: 'asthma-mad-at-mother', variable: 'Asthma_Shout_To_Mother', value: 'true' }));
                    passage.set({ choices: choices });
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-bruise-assume-truth', isLast: false, context: '<p>"It\'s not what you think. Wait here, I will clean this up."</p><p>You\'re convinced that they did this to her, the same people who broke your window. They blame your family because they believe your father\'s experiment provoked the enemy. Your dad didn\'t talk much about his experiment, so the only thing you know is he is a genetic researcher working for the government. You cannot ask your mom about dad, since she always ends up sobbing everytime you mention him.</p><p>She comes back with a broom, but you notice she puts some cosmetic powder on her face. She is sweeping broken glass silently.</p>' });
                    that.mPassages.add(passage);
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom. It\'s ok to tell me the truth. I already know what happened."', next: 'asthma-bruise-ask-truth', variable: '', value: '' }));
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom! I really hate you when you act like this. Leave me alone, and don\'t bother me till dinner!"', next: 'asthma-mad-at-mother', variable: 'Asthma_Shout_To_Mother', value: 'true' }));
                    passage.set({ choices: choices });
                }
                // act 1: asthma-mad-at-mother
                if (Asthma_On_First_Floor) {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-mad-at-mother', isLast: false, context: '<p>You run up the stairs, and slam the door. You know you should\'nt have talked to her like that; You haven\'t eaten for two days, and there is nothing left in the kitchen. She was probably harassed by people while trying to get food. Even though knowing the truth, you can\'t help but being mad at her. But you hate yourself more; you can neither go outside, nor do anything when she is in danger. Yelling at her is only thing that you can do.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Lift your head not to cry.', next: 'asthma-mad-at-mother2', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'asthma-mad-at-mother', isLast: false, context: '<p>You point the door with your index finger. She puts the broom and dustpan on the floor, and walks out your room. You know you should\'nt have talked to her like that; You haven\'t eaten for two days, and there is nothing left in the kitchen.She was probably harassed by people while trying to get food. Even though knowing the truth, you can\'t help but being mad at her. But you hate yourself more; you can neither go outside, nor do anything when she is in danger. Yelling at her is only thing that you can do.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Lift your head not to cry.', next: 'asthma-mad-at-mother2', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 1: asthma-mad-at-mother2
                var passage = new SchrodingersCat.Passage({ name: 'asthma-mad-at-mother2', isLast: true, context: '<p>It doesn\'t help to control your emotion. Suddenly, everything blurs. You gasp for air, still trying to force, the whimpers down. With every breath the air is less and less filling. You clench your neck as your chest tightens. Your gasps echo, like hicuups.</p><p>"Gilly! Gilly!! Hang on!"</p><p>You hear squeaking noise of stairs of her mother running up to you. You barely stand up, and grope for an inhaler with right hand, but everything around you is blurred. Feeling like walking inside of thick fog, you slowly move your steps forward.</p>' });
                var choices = new SchrodingersCat.Choices();
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-bruise-ask-truth
                var passage = new SchrodingersCat.Passage({ name: 'asthma-bruise-ask-truth', isLast: false, context: '<p>"It\'s just... as you know, people hate us. I was trying to get some food from the government supply truck, and they recognized me."</p><p>You close your eyes, and bite your lower lip; but you can still hear the sniffling sound of your mom.</p><p>"Gilly, I am sorry. I couldn\'t get any food today."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, you don\'t need to be sorry, and I am the one who should apologize. If I am not in this condition..."', next: 'asthma-angry-others-no', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Mom! I can\'t stand anymore. I am gonna find them out and slap their faces 10 times!"', next: 'asthma-angry-others-yes', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-angry-others-no
                var passage = new SchrodingersCat.Passage({
                    name: 'asthma-angry-others-no',
                    isLast: true,
                    context: '<p>"Gilly, it\'s ok. You don\'t need to be sorry. I\'m just fine as you are with me."</p><p>You can no longer control your burst. Suddenly, everything blurs. You gasp for air, still trying to force, the whimpers down. With every breath the air is less and less filling. You clench your neck as your chest tightens. Your gasps echo, like hicuups.<p>"Gilly! Gilly!! Hang on!"</p><p>You barely stand up, and grope for an inhaler with right hand, but everything around you is blurred. Feeling like walking inside of thick fog, you slowly move your steps forward.</p>'
                });
                var choices = new SchrodingersCat.Choices();
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 1: asthma-angry-others-yes
                var passage = new SchrodingersCat.Passage({ name: 'asthma-angry-others-yes', isLast: true, context: '<p>You can\'t control your anger. Suddenly, everything blurs. You gasp for air, still trying to force, the whimpers down. With every breath the air is less and less filling. You clench your neck as your chest tightens. Your gasps echo, like hicuups.<p>"Gilly! Gilly!! Hang on!"</p><p>You barely stand up, and grope for an inhaler with right hand, but everything around you is blurred. Feeling like walking inside of thick fog, you slowly move your steps forward.</p>' });
                var choices = new SchrodingersCat.Choices();
                passage.set({ choices: choices });
                that.mPassages.add(passage);
            }
            else if (cnum == 2) {
                // act 2: cat-begin
                var passage = new SchrodingersCat.Passage({ name: 'cat-begin', isLast: false, first: 'Y', context: '<p>ou keep walking, everything around you is blurred. The pain in your chest is gone, but the dust still makes it difficult to breathe. Covering your mouth with your left hand, you try to figure out where you are. This is definitely not in your room. Straining your eyes, you try to peer through the dust to catch a glimpse of anything; Something\'s approaching you. Though blurred, its outline is not a human; it has four legs, and a tail. As it comes closer to you, you notice it\'s a... </p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'A giant cat.', next: 'cat-meet-cat', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-meet-cat
                if (Asthma_Shout_To_Mother) {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-meet-cat', isLast: false, context: '<p>The giant cat stops right in front of you, and lowers its head down toward you. The distance between the cat and your face is only a few inches. Suddenly, it raises its left front foot, and stabs its neck with its claw. Blood spurts from its neck, flouding your airway with a sea of red. You try to shout to make it stop, but your voice fails. <i>One last chance.</i> Inhailing as deep as you can, you shout at the top of your lungs.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"AHHhhaaa~~~"', next: 'cat-wake-up-shout', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-meet-cat', isLast: false, context: '<p>The giant cat stops right in front of you, and lowers its head down toward you. The distance between the cat and your face is only a few inches. Suddenly, it raises its left front foot, and stabs its neck with its claw. Blood spurts from its neck, flouding your airway with a sea of red. While being suffocated, you try to call your mother for help, but your voice fails. <i>One last chance.</i> Inhailing as deep as you can, you shout at the top of your lungs.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"AHHhhaaa~~~"', next: 'cat-wake-up-shout', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 2: cat-wake-up-shout
                if (!Asthma_On_First_Floor) {
                    if (Asthma_Shout_To_Mother) {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-wake-up-shout', isLast: false, context: '<p>You wake up screaming. You notice a bandage on your left foot. <i>Damn, Anne.</i> Unwrapping the bandage vigorously, you throw it on the ground. You roll out of the bed, and limp to the window. You look across the street, but there\'s no sign of activity. The cat is usually sitting on the neighbor\'s window across the street, staring at you whenever you look outside waiting for your dad come home.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '<i>Kitty, Kitty. Are you there? Come out, please.</i>', next: 'cat-keep-wait-cat', variable: '', value: '' }));
                        choices.add(new SchrodingersCat.Choice({ context: '<i>I\'m gonna find it.</i>', next: 'cat-find-out-cat', variable: 'Cat_Go_Outside_Find_Cat', value: 'true' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-wake-up-shout', isLast: false, context: '<p>You wake up screaming. You notice a bandage on your left foot. <i>Mom...</i> Without thanking her, you roll out of the bed, and limp to the window. You look across the street, but there\'s no sign of activity. The cat is usually sitting on the neighbor\'s window across the street, staring at you whenever you look outside waiting for your dad come home.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '<i>Kitty, Kitty. Are you there? Come out, please.</i>', next: 'cat-keep-wait-cat', variable: '', value: '' }));
                        choices.add(new SchrodingersCat.Choice({ context: '<i>I\'m gonna find it.</i>', next: 'cat-find-out-cat', variable: 'Cat_Go_Outside_Find_Cat', value: 'true' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-wake-up-shout', isLast: false, context: '<p>You wake up screaming. Rolling out of the bed, and putting on your flip-flops, you walk to the window. You look across the street, but there\'s no sign of activity. The cat is usually sitting on the neighbor\'s window across the street, staring at you whenever you look outside waiting for your dad come home.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '<i>Kitty, Kitty. Are you there? Come out, please.</i>', next: 'cat-keep-wait-cat', variable: '', value: '' }));
                    choices.add(new SchrodingersCat.Choice({ context: '<i>I\'m gonna find it.</i>', next: 'cat-find-out-cat', variable: 'Cat_Go_Outside_Find_Cat', value: 'true' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 2: cat-keep-wait-cat
                var passage = new SchrodingersCat.Passage({ name: 'cat-keep-wait-cat', isLast: false, context: '<p><i>What if it died?</i> All your doubts and fears entangle you. It has been three days since the cat disappeared. You shake your head, clearing out your mind.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '<i>But, what if?</i>', next: 'cat-think-cat-death', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-think-cat-death
                var passage = new SchrodingersCat.Passage({ name: 'cat-think-cat-death', isLast: false, context: '<p>The cat will come back, and so will dad. He will come back, tell the truth about his innocence, and slap those who harrased mom 10 fold! If a cat can survive in this chaos, so can dad. </p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '<i>I need to go out and find it.</i>', next: 'cat-find-out-cat', variable: 'Cat_Go_Outside_Find_Cat', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '<i>It will be back; I know it.</i>', next: 'cat-wait-window', variable: 'Cat_Go_Outside_Find_Cat', value: 'false' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-find-out-cat
                if (!Asthma_On_First_Floor) {
                    if (!Asthma_Shout_To_Mother) {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-find-out-cat', isLast: false, context: '<p>You walk out of your room, but your left foot is swollen and still painful. You find flip-flops under your bed and put them on. <i>Much better.</i> You put your left hand on the door handle, and slowly open it. The squeaking echos through the house. After a few steps, you call your mom.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"Mom? Are you there?"', next: 'cat-call-mother', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-find-out-cat', isLast: false, context: '<p>You walk out of your room, but your left foot is swollen and still painful. You find flip-flops under your bed and put them on. <i>Much better.</i> You put your left hand on the door handle, and slowly open it. The squeaking echos through the house. Mom must not be home or she would have come out already.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"It\'s better to check her room."', next: 'cat-check-mother-yes', variable: '', value: '' }));
                        choices.add(new SchrodingersCat.Choice({ context: '"Whatever..."', next: 'cat-go-downstairs', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                else {
                    if (!Asthma_Shout_To_Mother) {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-find-out-cat', isLast: false, context: '<p>You walk out of your room. You put your left hand on the door handle, and slowly open it. The squeaking echos through the house. After a few steps, you call your mom.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"Mom? Are you there?"', next: 'cat-call-mother', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-find-out-cat', isLast: false, context: '<p>You walk out of your room. You put your left hand on the door handle, and slowly open it. The squeaking echos through the house. Mom must not be home or she would have come out already.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"It\'s better to check her room."', next: 'cat-check-mother-yes', variable: '', value: '' }));
                        choices.add(new SchrodingersCat.Choice({ context: '"Whatever..."', next: 'cat-go-downstairs', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 2: cat-check-mother-yes
                var passage = new SchrodingersCat.Passage({ name: 'cat-check-mother-yes', isLast: false, context: '<p>Mom\'s room downstairs to the right. After walking down, you stand in front of her door. You open the door carefully, slowly turning the doorknob. She is not here.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Enter her room.', next: 'cat-enter-mom-room', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Go to porch.', next: 'cat-go-porch', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-enter-mom-room
                var passage = new SchrodingersCat.Passage({ name: 'cat-enter-mom-room', isLast: false, context: '<p>You step into her room without fully opening the door. You open her wardrobe and confirm her brown coat is not there. While closing the door of the wardrobe, you find a drawer that you\'ve never seen before.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Pull out the drawer', next: 'cat-try-open-lock', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-try-open-lock
                var passage = new SchrodingersCat.Passage({ name: 'cat-try-open-lock', isLast: false, context: '<p>The rattling noise tells you that you need other way to open it. You have a feeling that she hides her secret inside of this drawer. But for now, you need to go outside and come back before she does.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Leave the room, and go to porch.', next: 'cat-go-porch', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-call-mother
                var passage = new SchrodingersCat.Passage({ name: 'cat-call-mother', isLast: false, context: '<p>Leaning on the rail, you try to listen for any sound from downstairs. It\'s quiet. Mom must not be home or she would have come out already.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Go downstairs.', next: 'cat-go-downstairs', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Go back to your room.', next: 'cat-go-back-room', variable: 'Cat_Go_Outside_With_Inhaler', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-go-back-room
                var passage = new SchrodingersCat.Passage({ name: 'cat-go-back-room', isLast: false, context: '<p>You almost forgot to take an inhaler with you. Grabbing one from the drawer of your nightstand, you leave the room.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Go downstairs.', next: 'cat-go-downstairs', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-go-downstairs
                if (!Asthma_On_First_Floor) {
                    if (Asthma_Grab_Broom || Asthma_Broom_Second_Floor) {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-downstairs', isLast: false, context: '<p>It\'s hard for you to balance well with an injured foot, and the noise from the wooden stairs is louder than before. After descending the stairs, you turn to walk to the porch. Standng in front of the door, you take a deep breath, turning the handle with your weight, and push yourself forward.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'STOMP!', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-downstairs', isLast: false, context: '<p>It\'s hard for you to balance well with an injured foot, and the noise from the wooden stairs is louder than before. After descending the stairs, you turn to walk to the porch. Taking a deep breath, you stand in front of the door, hesitating for a second, and look around-- a broom stick is leaning on the wall.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"I might need that."', next: 'cat-obtain-broom', variable: 'Cat_Go_Outside_With_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'It\'s just a small cat.', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                else {
                    if (Asthma_Grab_Broom || Asthma_Broom_Second_Floor) {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-downstairs', isLast: false, context: '<p>After descending the stairs, you turn to walk to the porch. Standng in front of the door, you take a deep breath, turning the handle with your weight, and push yourself forward.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'THUD!', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-downstairs', isLast: false, context: '<p>After descending the stairs, you turn to walk to the porch. Taking a deep breath, you stand in front of the door, hesitating for a second, and look around-- a broom stick is leaning on the wall.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"I might need that."', next: 'cat-obtain-broom', variable: 'Cat_Go_Outside_With_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'It\'s just a small cat.', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 2: cat-go-porch
                if (!Asthma_On_First_Floor) {
                    if (Asthma_Grab_Broom || Asthma_Broom_Second_Floor) {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-porch', isLast: false, context: '<p>Standing in front of the entrance, you hesitate a little bit. Your foot still hurts, even though wearing comfortable shoes. Taking a deep breath, you take a deep breath, turning the handle with your weight, and push yourself forward.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'STOMP!', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-porch', isLast: false, context: '<p>Standing in front of the entrance, you hesitate a little bit. Your foot still hurts, even though wearing comfortable shoes. Taking a deep breath, you stand in front of the door, hesitating for a second, and look around-- a broom stick is leaning on the wall.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"I might need that."', next: 'cat-obtain-broom', variable: 'Cat_Go_Outside_With_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'It\'s just a small cat.', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                else {
                    if (Asthma_Grab_Broom || Asthma_Broom_Second_Floor) {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-porch', isLast: false, context: '<p>Standing in front of the entrance, you hesitate a little bit. You\'re worried about your asthma. Taking a deep breath, you take a deep breath, turning the handle with your weight, and push yourself forward.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'STOMP!', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'cat-go-porch', isLast: false, context: '<p>Standing in front of the entrance, you hesitate a little bit. You\'re worried about your asthma. Taking a deep breath, you stand in front of the door, hesitating for a second, and look around-- a broom stick is leaning on the wall.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: '"I might need that."', next: 'cat-obtain-broom', variable: 'Cat_Go_Outside_With_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'It\'s just a small cat.', next: 'cat-go-outside', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 2: cat-obtain-broom
                var passage = new SchrodingersCat.Passage({ name: 'cat-obtain-broom', isLast: false, context: '<p>It\'s a 3 feet long wooden broom stick. The end of stick is split, and sharply pointed. Grasping the handle firmly with your left hand, you push yourself foward, opening the door with your right hand.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'STOMP!', next: 'cat-go-outside', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-go-outside
                if (Cat_Go_Outside_With_Inhaler) {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-go-outside', isLast: false, context: '<p>You leave the door for the first time in 6 months. It\'s one small step for others, one giant leap for you. At the same time, you remember mom\'s word not to go outside. Covering your mouth with right hand, you advance forward across the street. The dust is thicker than you thought. After a few seconds, everything around you fades into dust, and you get lost. It\'s hard to breathe. Taking out your inhaler from your jacket, you spout gas into your mouth. Nothing happens. You shake the inhaler and try again, but nothing comes out.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Damn!"', next: 'cat-outside-pass-out', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-go-outside', isLast: false, context: '<p>You leave the door for the first time in 6 months. It\'s one small step for others, one giant leap for you. At the same time, you remember mom\'s word not to go outside. Covering your mouth with right hand, you advance forward across the street. The dust is thicker than you thought. After a few seconds, everything around you fades into dust, and you get lost. It\'s hard to breathe. You search through your pocket, but you realize you forgot to bring an inhaler.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Damn!"', next: 'cat-outside-pass-out', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 2: cat-outside-pass-out
                var passage = new SchrodingersCat.Passage({ name: 'cat-outside-pass-out', isLast: false, context: '<p>You hit the ground in agony, your head resting on the cement. You struggle to stay awake. Beathing heavily, you notice something rushing toward you. It\'s too blurry to recognize it. It stops right in front of you, and kneels down. After a second, you feel fresh air in your lungs. As you regain your consciousness, you recognize what\'s in front of you.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom?"', next: 'cat-save-find-mom', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Dad?"', next: 'cat-save-find-dad', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-save-find-mom
                var passage = new SchrodingersCat.Passage({ name: 'cat-save-find-mom', isLast: false, context: '<p>"Gilly, Gilly! Are you ok? Can you hear me?"</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I thought dad saved me."', next: 'cat-back-home-mom-sobbing', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-save-find-dad
                var passage = new SchrodingersCat.Passage({ name: 'cat-save-find-dad', isLast: false, context: '<p>"Gilly, Gilly! Are you ok? Can you hear me?"</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I saw dad, mom. He was here. He saved me."', next: 'cat-back-home-mom-sobbing', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-back-home-mom-sobbing
                var passage = new SchrodingersCat.Passage({ name: 'cat-back-home-mom-sobbing', isLast: false, context: '<p>"Oh, Gilly. You must have seen his soul."</p><p>She pauses for a moment.</p><p>"Gilly, I don\'t think I should show you this, but since you don\'t listen and go outside, I think it\'s better to show you."</p><p>She takes out a letter from her pocket. It\'s partially stained with dried blood, but you can clearly see the name on the cover.</p><p><i>To Gilly,</i></p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Snatch the letter from her.', next: 'cat-read-letter', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-read-letter
                var passage = new SchrodingersCat.Passage({ name: 'cat-read-letter', isLast: false, context: '<p>It\'s addressed to you. With doubts and curiosity, you open it. Your eyes dart through the sentences. <i>Dad.</i> In the letter, he explain how government manipulated his research, how much he loves you and mom, and promises to come back to you after it\'s resolved.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom! Dad is still alive!"', next: 'cat-tell-dad-alive', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-tell-dad-alive
                var passage = new SchrodingersCat.Passage({ name: 'cat-tell-dad-alive', isLast: false, context: '<p>"Gilly, can\'t you see the blood on the letter? If he is alive, why did he just slide the letter under the door and leave without seeing us? He\'s gone!"</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I don\'t believe you. He is not dead! Let me go outside to find the cat! I need to find it!"', next: 'cat-let-me-go', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, you can\'t lose hope! He\'s coming back."', next: 'cat-let-have-hope', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-let-have-hope
                var passage = new SchrodingersCat.Passage({ name: 'cat-let-have-hope', isLast: false, context: '<p>"It\'s been 6 months, and he\'s still not back. Gilly, I don\'t want him to be dead, but..."</p><p>You lift your eyes and watch her face. Her tears run over her nose, purplish and bruised.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, did they do this to you!? I told you not to go to that place!"', next: 'cat-ask-mother-bruise', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-let-me-go
                var passage = new SchrodingersCat.Passage({ name: 'cat-let-me-go', isLast: false, context: '<p>You put your flip-flops back on your feet, and stand up from the couch. She grabs your arm.</p><p>SMACK!</p><p>You can\'t even feel your cheek. She\'s never slapped you before.</p><p>"Wake up!"</p><p>You lift your eyes and watch her face. Her tears run over her nose, purplish and bruised.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, did they do this to you!? I told you not to go to that place!"', next: 'cat-ask-mother-bruise', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-ask-mother-bruise
                var passage = new SchrodingersCat.Passage({ name: 'cat-ask-mother-bruise', isLast: false, context: '<p>"It\'s not like that, Gilly."</p><p>She turns her face away from you.</p><p>"Please, go back to your room. Let\'s talk later. Here, I got two more inhalers."</p><p>She places them in your right hand and closes it. <i>Mom...</i> You go upstairs, back to your room, and close the door. Your hands are trembling.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'You lift your right arm, and throw the inhalers out the window.', next: 'cat-throw-inhaler', variable: 'Cat_Throw_Inhaler_Window', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: 'You lift your left arm, and strike the door with your fist.', next: 'cat-slam-door', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-slam-door
                var passage = new SchrodingersCat.Passage({ name: 'cat-slam-door', isLast: true, context: '<p>SLAM!</p><p>You bite your lower lip. You feel so sorry for your mother. You can\'t just let her keep getting hurt for food. You can\'t go outside, but how else does she expect you to help!? You lie down and close your eyes waiting the night to come.</p>' });
                var choices = new SchrodingersCat.Choices();
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-throw-inhaler
                var passage = new SchrodingersCat.Passage({ name: 'cat-throw-inhaler', isLast: true, context: '<p>Both inhalers fly through the window. She doesn\'t know how much you hate seeing her bruised face. She keeps risking her life for food! You slam your head on your pillows and close your eyes to try calm down.</p>' });
                var choices = new SchrodingersCat.Choices();
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-wait-window
                var passage = new SchrodingersCat.Passage({ name: 'cat-wait-window', isLast: false, context: '<p>Leaning on the window frame, you keep watching across the street. Suddenly, you see an unknown figure approaching your house. <i>Mom?</i> The color of their hair, and their outfit tells you that it\'s not mom. <i>Dad?</i></p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Dad!"', next: 'cat-think-as-dad', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-think-as-dad
                if (!Asthma_On_First_Floor) {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-think-as-dad', isLast: false, context: '<p>Even though your left heel still hurts, you run down stairs. You put your eyes on the peep hole of the door to confirm. It\'s a man... but not dad. You take your eyes from the door, and cover your mouth quickly. <i>He might be one of them.</i> The sound stops right in front of the entrance.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'KNOCK, KOCK!', next: 'cat-man-knock', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-think-as-dad', isLast: false, context: '<p>Overwhelmed with joy, you run down stairs. You put your eyes on the peep hole of the door to confirm. It\'s a man... but not dad. You take your eyes from the door, and cover your mouth quickly. <i>He might be one of them.</i> The sound stops right in front of the entrance.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'KNOCK, KOCK!', next: 'cat-man-knock', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 2: cat-man-knock
                if (Asthma_Grab_Broom || Asthma_Broom_Second_Floor) {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-man-knock', isLast: false, context: '<p>Filled with fear, you look around to find a weapon. <i>Damn, the broom stick was here before.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Stay silent, pretending no one is here.', next: 'cat-slide-letter', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-man-knock', isLast: false, context: '<p>Filled with fear, you look around to find a weapon. A broom stick leans on the wall. You take off your flip-flops to not make any noise, and pick up the brrom stick carefully.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Point the broom stick toward the door, and wait.', next: 'cat-slide-letter', variable: 'Cat_Believe_Dad_Died', value: 'true' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 2: cat-slide-letter
                var passage = new SchrodingersCat.Passage({ name: 'cat-slide-letter', isLast: false, context: '<p>KNOCK, KNOCK, KNOCK!</p><p>Holding your breath, you stay still. Wondering how much time has passed, suddenly, a letter slides under the door. The letter is partially stained with dried blood, but you can clearly see the name on the cover.</p><p><i>To Gilly,</i></p><p>It\'s addressed to you. You sit down on the porch and, open it without hesitation. It\'s from dad. In the letter, he describes how much he loves you, and asks you to take care of mom if he can\'t make it. That figure was not your dad, but he was holding your dad\'s letter. It could mean...</p><p>Another footstep sound. This one is ligher than previous one. The sound of key turns.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'SQUEAK!', next: 'cat-mom-back', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-mom-back
                if (Asthma_Shout_To_Mother) {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-mom-back', isLast: false, context: '<p>You lift your head and look up. It\'s not clear because of the tears in your eyes, but you notice it\'s mom.</p><p>"Gilly, Gilly! Are you ok?"</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"It\'s nothing."', next: 'cat-pretend-nothing', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'cat-mom-back', isLast: false, context: '<p>You lift your head and look up. It\'s not clear because of the tears in your eyes, but you notice it\'s mom.</p><p>"Gilly, Gilly! Are you ok?"</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom. I think dad is dead."', next: 'cat-cry-in-bosom', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 2: cat-pretend-nothing
                var passage = new SchrodingersCat.Passage({ name: 'cat-pretend-nothing', isLast: false, context: '<p>You hide the letter and wipe your face. You don\'t want to make her lose hope about dad. You know she\'s stuborn to stay in this dark city to wait for dad to come back. Wiping your face again, you notice another bruise on her nose. Wihtout saying anything, you turn around and walk up to stairs. Mom\'s voice echoes through the house calling you, but you ignore her and close the door behind of you.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'You lift your left arm, and strike the door with your fist.', next: 'cat-slam-door', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'You lift your right arm, and throw inhalers out the window.', next: 'cat-throw-inhaler', variable: 'Cat_Throw_Inhaler_Window', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-cry-in-bosom
                var passage = new SchrodingersCat.Passage({ name: 'cat-cry-in-bosom', isLast: false, context: '<p>You pull her coat into you, and sob in her bosom. She pats you with one hand, and reads the letter with the other hand.</p><p>"Gilly, don\'t worry. Your dad will come back. He said he loves us. He won\'t abandon us."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Really? Do you really think so?"', next: 'cat-ask-again', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 2: cat-ask-again
                var passage = new SchrodingersCat.Passage({ name: 'cat-ask-again', isLast: false, context: '<p>"He will."</p><p>Her tears run over her nose, purplish and bruised. Wiping her tears with your sleeve, you ask to her.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom, did they do this to you, again?"', next: 'cat-ask-mother-bruise', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
            }
            else if (cnum == 3) {
                var passage = new SchrodingersCat.Passage({ name: 'love-begin', isLast: false, first: 'W', context: '<p>hen you open your eyes, it\'s already dark outside. Only small amount of moon light comes through the gaps of the boarded wooden panels.</i> The heavy air in the room occasionally vibrates from far sirens. You wake up, and walk to the window. The ground is wet and cold.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Open the window.', next: 'love-window', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-window
                if (!Cat_Throw_Inhaler_Window) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-window', isLast: false, context: '<p>There are more people on the street in the night than in the morning. Most of them are scavangers, or traders. You\'re also waiting for one of them. There are not many scavangers or traders around your house since you live in the outskirts of the city, but still you have seen at least one every other night. At last, a guy with a heavy back pack is passing by.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Hey!"', next: 'love-call-trader', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-window', isLast: false, context: '<p>There are more people on the street in the night than in the morning. Most of them are scavangers, or traders. Suddenly, a guy with a heavy back pack is passing by your house. He looks around and approaches your house. At the same time, you see your inhalers on the ground shining in moon light.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Hey! Wait! Those are mine!"', next: 'love-shout-inhaler', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-call-trader
                if (Asthma_Broom_Second_Floor && !Cat_Go_Outside_With_Broom) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-call-trader', isLast: false, context: '<p>He doesn\'t stop. You want to shout louder, but you don\'t want to wake mom. You look around your room to find some objects.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Throw rock at him.', next: 'love-throw-rock', variable: '', value: '' }));
                    choices.add(new SchrodingersCat.Choice({ context: 'Throw broom at him.', next: 'love-throw-broom', variable: 'Love_Lost_Broom', value: 'true' }));
                    choices.add(new SchrodingersCat.Choice({ context: 'Throw a flip-flop at him.', next: 'love-throw-shoe', variable: 'Love_Lost_Shoe', value: 'true' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-call-trader', isLast: false, context: '<p>He doesn\'t stop. You want to shout louder, but you don\'t want to wake mom. You look around your room to find some objects.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: 'Throw rock at him.', next: 'love-throw-rock', variable: '', value: '' }));
                    choices.add(new SchrodingersCat.Choice({ context: 'Throw a flip-flop at him.', next: 'love-throw-shoe', variable: 'Love_Lost_Shoe', value: 'true' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-throw-rock
                var passage = new SchrodingersCat.Passage({ name: 'love-throw-rock', isLast: false, context: '<p>As the rock lands on the ground, he looks around to figure out where it came from. You call him again, waving your left hand.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Hey, come here."', next: 'love-trader-meet', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-throw-broom
                var passage = new SchrodingersCat.Passage({ name: 'love-throw-broom', isLast: false, context: '<p>The wooden stick hits the ground. <i>Hope he doesn\'t think it\'s a threat.</i> He looks around to figure out where it came from. You call him again, waving your left hand.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Hey, come here."', next: 'love-trader-meet', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-throw-shoe
                var passage = new SchrodingersCat.Passage({ name: 'love-throw-shoe', isLast: false, context: '<p>Your flip-flip falls on top of his head.</p><p>"What the!"</p><p>He picks up your flip-flop and looks around to figure out where it came from. You call him again, waving your left hand.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Sorry, could you come here?"', next: 'love-trader-meet', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-trader-meet
                var passage = new SchrodingersCat.Passage({ name: 'love-trader-meet', isLast: false, context: '<p>He looks at the window and approaches you.</p><p>"What do you want?"</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Do you have a taser?"', next: 'love-ask-taser', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"Do you have any food?"', next: 'love-ask-food', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-ask-taser
                var passage = new SchrodingersCat.Passage({ name: 'love-ask-taser', isLast: false, context: '<p>"Maybe. It depends on what you have to offer."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I have asthma inhalers."', next: 'love-trade-agree', variable: 'Love_Try_Trade_Taeser', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '"What about food? Do you have any food?"', next: 'love-ask-food-again', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-ask-food
                var passage = new SchrodingersCat.Passage({ name: 'love-ask-food', isLast: false, context: '<p>"Yes, I have some food. But you better have something for it."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I have asthma inhalers."', next: 'love-trade-agree', variable: 'Love_Try_Trade_Food', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '"What about taser? Do you also have a taser?"', next: 'love-ask-taser-again', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-ask-taser-again
                var passage = new SchrodingersCat.Passage({ name: 'love-ask-taser-again', isLast: false, context: '<p>"Maybe. It depends on what you have to offer."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I want to trade my inhaler for a taser."', next: 'love-trade-agree', variable: 'Love_Try_Trade_Taeser', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '"I want to trade my inhaler for food."', next: 'love-trade-agree2', variable: 'Love_Try_Trade_Food', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-ask-food-again
                var passage = new SchrodingersCat.Passage({ name: 'love-ask-food-again', isLast: false, context: '<p>"Yes, I have some food. But you better have something for it."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I want to trade my inhaler for food."', next: 'love-trade-agree', variable: 'Love_Try_Trade_Food', value: 'true' }));
                choices.add(new SchrodingersCat.Choice({ context: '"I want to trade my inhaler for a taser."', next: 'love-trade-agree2', variable: 'Love_Try_Trade_Taeser', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-trade-agree
                if (Love_Lost_Shoe) {
                    if (!Asthma_Broom_Second_Floor && !Cat_Go_Outside_With_Broom) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grab the broom stick leaning on the wall.', next: 'love-grab-broom', variable: 'Love_Grab_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                else {
                    if (!Asthma_Broom_Second_Floor && !Cat_Go_Outside_With_Broom) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail. After passing mom\'s room, you put your flip-flops back on, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grab the broom stick leaning on the wall.', next: 'love-grab-broom', variable: 'Love_Grab_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail. After passing mom\'s room, you put your flip-flops back on, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 3: love-trade-agree2
                if (Love_Lost_Shoe) {
                    if (!Asthma_Broom_Second_Floor && !Cat_Go_Outside_With_Broom) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree2', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grab the broom stick leaning on the wall.', next: 'love-grab-broom', variable: 'Love_Grab_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree2', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                else {
                    if (!Asthma_Broom_Second_Floor && !Cat_Go_Outside_With_Broom) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree2', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail. After passing mom\'s room, you put your flip-flops back on, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grab the broom stick leaning on the wall.', next: 'love-grab-broom', variable: 'Love_Grab_Broom', value: 'true' }));
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'love-trade-agree2', isLast: false, context: '<p>"Come down. Meet me at the front door."</p><p>Holding your flip-flop on your left hand to minimize footstep noise, you open the door carefully, trying not to wake <i>her</i> up. You slide stairs using a hand rail. After passing mom\'s room, you put your flip-flops back on, and walk to the porch.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Unlock the door, and open it.', next: 'love-open-main-door', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 3: love-grab-broom
                var passage = new SchrodingersCat.Passage({ name: 'love-grab-broom', isLast: false, context: '<p>It\'s a 3 feet long wooden broom stick. The end of stick is split, and sharply pointed. You grasp the handle firmly with your left hand.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Open the door with you right hand.', next: 'love-open-main-door', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-open-main-door
                if (Cat_Go_Outside_Find_Cat) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-open-main-door', isLast: false, context: '<p>The door doesn\'t move. You examine the door with your eyes wide open, and find a lock on the door. Certainly, mom locked the door from inside.</p><p>KNOCK, KNOCK!</p><p>He is waiting for you on the other side of the door.</p><p>"Hey, you there?"</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Could you go around, and meet me at the back door?"', next: 'love-go-back-door', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    if (Love_Try_Trade_Food) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-open-main-door', isLast: false, context: '<p>He stands in front of the door. Searching his bag, he takes out a loaf of bread. All your attention is solely on the bread.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'You hand one inhaler to him', next: 'love-give-one-inhaler', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else if (Love_Try_Trade_Taeser) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-open-main-door', isLast: false, context: '<p>He stands in front of the door. Searching his bag, he takes out a taser gun. All your attention is solely on the taser.</p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'You hand one inhaler to him', next: 'love-give-one-inhaler', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 3: love-go-back-door
                var passage = new SchrodingersCat.Passage({ name: 'love-go-back-door', isLast: false, context: '<p>"All right."</p><p>You walk to the back door in the kitchen. You ratthle at the door, but it\'s also locked.</p><p>"Hey, I\'m here. Open the door."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I can\'t. The door is locked."', next: 'love-back-door-locked', variable: '', value: '' }));
                if (Love_Grab_Broom) {
                    choices.add(new SchrodingersCat.Choice({ context: '"Wait a second. Let me open it."', next: 'love-back-door-force', variable: 'Love_Open_Door', value: 'true' }));
                }
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-back-door-locked
                if (Love_Try_Trade_Food) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-back-door-locked', isLast: false, context: '<p>You walk toward the window next to the door, stretching out your left arm through the crack between boarded wooden panel, and wave your hand. He notices your hand, and approaches. You grab one inhaler from your pocket and hand it through the window. He spouts the gas into his mouth. You wave your hand, asking for the bread.</p><p>"This is good, but I need one more; two for one loaf."</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"What? You\'re crazy. Give my inhaler back!"', next: 'love-back-door-betrayed', variable: 'Love_Lost_One_Inhaler', value: 'true' }));
                    choices.add(new SchrodingersCat.Choice({ context: '"Are you Serious?"', next: 'love-hand-second-inhaler', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-back-door-locked', isLast: false, context: '<p>You walk toward the window next to the door, stretching out your left arm through the crack between boarded wooden panel, and wave your hand. He notices your hand, and approaches. You grab one inhaler from your pocket and hand it through the window. He spouts the gas into his mouth. You wave your hand, asking for the taser.</p><p>"This is good, but I need one more; two for the taser."</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"What? You\'re crazy. Give my inhaler back!"', next: 'love-back-door-betrayed', variable: 'Love_Lost_One_Inhaler', value: 'true' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-back-door-force
                var passage = new SchrodingersCat.Passage({ name: 'love-back-door-force', isLast: false, context: '<p>You pry open the door with the broom. </p><p>THUD!</p><p>The lock drops to the floor.</p><p>"Gilly?"</p><p><i>I need to hurry!</i> You put your index finger to your lip, and hand one inhaler to him. He spouts the gas into his mouth. Smiling, he gestures for two. <i>Are you kidding me?</i></p><p>"Gilly, is that you?"</p><p>With mom\'s voice, you heard the door opening sound. Your heart starts pounding heavily.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Hand another inhaler to him.', next: 'love-close-back-door-trade', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: 'Close the door quickly.', next: 'love-mom-awake', variable: 'Love_Lost_One_Inhaler', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-hand-second-inhaler
                var passage = new SchrodingersCat.Passage({ name: 'love-close-back-door-trade', isLast: false, context: '<p>You snatch the bread from him, and close the door.</p><p>"Gilly, what are you doing this late?"</p><p>Mom stares at you suspiciously.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"It\'s nothing. I will go back to my room."', next: 'love-hide-bread', variable: '', value: '' }));
                if (!Asthma_Shout_To_Mother) {
                    choices.add(new SchrodingersCat.Choice({ context: '"Mom, I got some bread."', next: 'love-tell-mom-bread', variable: '', value: '' }));
                }
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-tell-mom-bread
                var passage = new SchrodingersCat.Passage({ name: 'love-tell-mom-bread', isLast: false, context: '<p>You show the bread to her.</p><p>"How did you get it?"</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"I traded my inhaler for it. You know, mom. I\'m fine with just one."', next: 'love-mother-freeze', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-mother-freeze
                var passage = new SchrodingersCat.Passage({ name: 'love-mother-freeze', isLast: false, context: '<p>"Thank you, Gilly. But you don\'t need to be worried about food. Your safety is more important to me, ok?"</p><p>You can\'t see her face clearly since it\'s too dark, but her voice is quivering.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '"Mom. Don\'t lie to me. I don\'t want to see you hurt."', next: 'love-hate-hurt', variable: '', value: '' }));
                choices.add(new SchrodingersCat.Choice({ context: '"I will, mom."', next: 'love-go-back-room', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-hate-hurt
                var passage = new SchrodingersCat.Passage({ name: 'love-hate-hurt', isLast: false, context: '<p>"Gilly, please, please don\'t."</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '<i>......</i>', next: 'love-go-back-room', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-go-back-room
                var passage = new SchrodingersCat.Passage({ name: 'love-go-back-room', isLast: false, context: '<p>You walk back to your room, and lie on the bed. You gently smile. You can\'t sleep; you are so excited.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '<i>Let\'s do some laundry.</i>', next: 'love-before-laundary', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-hide-bread
                var passage = new SchrodingersCat.Passage({ name: 'love-hide-bread', isLast: false, context: '<p>You hide the bread behind you, walk back to your room, and lie on the bed. You put the bread on your chest, and gently smile. You can\'t sleep; you are so excited.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '<i>Let\'s do some laundry.</i>', next: 'love-before-laundary', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-give-one-inhaler
                if (Love_Try_Trade_Food) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-give-one-inhaler', isLast: false, context: '<p>Taking a look at it for a few seconds, he spouts the gas into his mouth.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Now, give me the bread."', next: 'love-ask-second-inhaler', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-give-one-inhaler', isLast: false, context: '<p>Taking a look at it for a few seconds, he spouts the gas into his mouth.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"Now, give me the taser."', next: 'love-ask-second-inhaler', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-ask-second-inhaler
                if (Love_Try_Trade_Food) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-ask-second-inhaler', isLast: false, context: '<p>He shakes his head with a wicked smile,</p><p>"No. I need two for one loaf."</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"What? You\'re crazy. Give my inhaler back!"', next: 'love-back-door-betrayed', variable: 'Love_Lost_One_Inhaler', value: 'true' }));
                    choices.add(new SchrodingersCat.Choice({ context: '"Are you serious?"', next: 'love-hand-second-inhaler', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-ask-second-inhaler', isLast: false, context: '<p>He shakes his head with a wicked smile,</p><p>"No. I need two for the taser."</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"What? You\'re crazy. Give my inhaler back!"', next: 'love-back-door-betrayed', variable: 'Love_Lost_One_Inhaler', value: 'true' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-back-door-betrayed
                if (Love_Try_Trade_Food) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-back-door-betrayed', isLast: false, context: '<p>"Hahaha, it\'s already mine!"</p><p>He runs away. You pull the door as hard as you can, but it doesn\'t budge at all.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"HEY! YOU LITTLE CHEAT! COME BACK!!"', next: 'love-mom-awake', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-back-door-betrayed', isLast: false, context: '<p>"Hahaha, it\'s already mine!"</p><p>He runs away. You pull the door as hard as you can, but it doesn\'t budge at all.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    choices.add(new SchrodingersCat.Choice({ context: '"HEY! YOU LITTLE CHEAT! COME BACK!!"', next: 'love-mom-awake', variable: '', value: '' }));
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-mom-awake
                var passage = new SchrodingersCat.Passage({ name: 'love-mom-awake', isLast: false, context: '<p>"Gilly, what are you doing this late?"</p><p>Mom stares at you suspiciously.</p>' });
                var choices = new SchrodingersCat.Choices();
                if (Asthma_Shout_To_Mother) {
                    choices.add(new SchrodingersCat.Choice({ context: '"None of your business."', next: 'love-mom-none-business', variable: '', value: '' }));
                }
                else {
                    choices.add(new SchrodingersCat.Choice({ context: '"It\'s nothing. I just heard a weird noise."', next: 'love-mom-nothing', variable: '', value: '' }));
                }
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-mom-none-business
                if (Love_Lost_One_Inhaler) {
                    if (Cat_Believe_Dad_Died) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-mom-none-business', isLast: false, context: '<p>"Gilly! Gilly!!"</p><p>Mom\'s voice echoes through the house calling you, but you ignore her, run up to stairs, and close the door behind of you. With a deep sigh, you open your hand, and look at the last inhaler. <i>How stupid I am.</i> You should\'ve known he was one of them. <i>Dad... I\'m gonna find you, even if it\'s your corpse. I will confim it myself, and leave this city with mom!</i></p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grasp the last inhaler firmly, and go to laundry room.', next: 'love-last-inhaler-laundary', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'love-mom-none-business', isLast: false, context: '<p>"Gilly! Gilly!!"</p><p>Mom\'s voice echoes through the house calling you, but you ignore her, run up to stairs, and close the door behind of you. With a deep sigh, you open your hand, and look at the last inhaler. <i>How stupid I am.</i> You should\'ve known he was one of them. <i>Dad... I know you\'re alive, and I am gonna find you!</i></p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grasp the last inhaler firmly, and go to laundry room.', next: 'love-last-inhaler-laundary', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 3: love-mom-nothing
                if (Love_Lost_One_Inhaler) {
                    if (Cat_Believe_Dad_Died) {
                        var passage = new SchrodingersCat.Passage({ name: 'love-mom-nothing', isLast: false, context: '<p>"Gilly! Gilly!!"</p><p>Mom\'s voice echoes through the house calling you, but you ignore her, run up to stairs, and close the door behind of you. With a deep sigh, you open your hand, and look at the last inhaler. <i>How stupid I am.</i> You should\'ve known he was one of them. <i>Dad... I\'m gonna find you, even if it\'s your corpse. I will confim it myself, and leave this city with mom!</i></p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grasp the last inhaler firmly, and go to laundry room.', next: 'love-last-inhaler-laundary', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                    else {
                        var passage = new SchrodingersCat.Passage({ name: 'love-mom-nothing', isLast: false, context: '<p>"Gilly! Gilly!!"</p><p>Mom\'s voice echoes through the house calling you, but you ignore her, run up to stairs, and close the door behind of you. With a deep sigh, you open your hand, and look at the last inhaler. <i>How stupid I am.</i> You should\'ve known he was one of them. <i>Dad... I know you\'re alive. I am gonna find you!</i></p>' });
                        var choices = new SchrodingersCat.Choices();
                        choices.add(new SchrodingersCat.Choice({ context: 'Grasp the last inhaler firmly, and go to laundry room.', next: 'love-last-inhaler-laundary', variable: '', value: '' }));
                        passage.set({ choices: choices });
                        that.mPassages.add(passage);
                    }
                }
                // act 3: love-last-inhaler-laundary
                var passage = new SchrodingersCat.Passage({ name: 'love-last-inhaler-laundary', isLast: false, context: '<p>You slide along the stairs using a hand rail. After standing still for a minute to check she\'s not awake, you walk into the laudry room. You take mom\'s brown coat and boots from the basket, and put them on. As you put your inhaler into the coat pocket, you feel something in the pocket.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Take out from the pocket.', next: 'love-take-out-pocket', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-take-out-pocket
                if (Love_Open_Door) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-take-out-pocket', isLast: true, context: '<p><i>What... the...</i> There are a dozen condoms in her pocket. <i>So this is how she gets my medicine!</i> You can\'t take the pain of being such a burden. You stare into your mom\'s room for a while with tears in your eyes. Covering your mouth with your left hand, and holding your inhaler with the other hand, you walk into the fog.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-take-out-pocket', isLast: true, context: '<p><i>What... the...</i> There are a dozen condoms in her pocket. <i>So this is how she gets my medicine!</i> You can\'t take the pain of being such a burden. You stare into your mom\'s room for a while with tears in your eyes. You go back to your room. The broken window is not boarded yet; You throw yourself out of the window.</p><p>THUD!</p><p>"Gilly, Gilly!"</p><p>Leaving behind your mother\'s call, covering your mouth with your left hand, and holding your inhaler with another hand, you walk into the fog.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-hand-second-inhaler
                var passage = new SchrodingersCat.Passage({ name: 'love-hand-second-inhaler', isLast: false, context: '<p>"Yes, I am. Give me one more if you want the bread."</p><p>You hold your inhaler tightly. <i>This is my last inhaler.</i> After taking a deep breath, you hand the last inhaler to him, and snatch the bread from him. After getting what he wants, he walks away from you, giggling.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Close the door.', next: 'love-close-main-door', variable: 'Love_Get_Food', value: 'true' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-close-main-door
                var passage = new SchrodingersCat.Passage({ name: 'love-close-main-door', isLast: false, context: '<p>You walk back to the kitchen, and put the bread on the table. You look at back and forth the bread and mom\'s room. You smile. You go back to your room, and lie on the bed, but you can\'t sleep; you are so excited.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: '<i>Let\'s do some laundry.</i>', next: 'love-before-laundary', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-before-laundary
                var passage = new SchrodingersCat.Passage({ name: 'love-before-laundary', isLast: false, context: '<p>You slide along stairs using a hand rail. Standing still for a minute to check she\'s not awake, you walk into the laudry room. You take mom\'s brown coat and boots from the basket, and put them on. As you put your inhaler into the coat pocket, you feel something in the pocket.</p>' });
                var choices = new SchrodingersCat.Choices();
                choices.add(new SchrodingersCat.Choice({ context: 'Take out from the pocket.', next: 'love-do-laundary', variable: '', value: '' }));
                passage.set({ choices: choices });
                that.mPassages.add(passage);
                // act 3: love-do-laundary
                if (Love_Open_Door) {
                    var passage = new SchrodingersCat.Passage({ name: 'love-do-laundary', isLast: true, context: '<p><i>What... the...</i> There are a dozen condoms in her pocket. <i>So this is how she gets my medicine!</i> You can\'t take the pain of being such a burden. You stare into your mom\'s room for a while with tears in your eyes. You open the door, and run as fast as you can. You trip over a rock. Your chest starts hurting, and the air is less and less filling, but you don\'t try to breathe this time. Everything blurs, and the last thing that you see before closing your eyes is a cat sitting next you.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                else {
                    var passage = new SchrodingersCat.Passage({ name: 'love-do-laundary', isLast: true, context: '<p><i>What... the...</i> There are a dozen condoms in her pocket. <i>So this is how she gets my medicine!</i> You can\'t take the pain of being such a burden. You stare into your mom\'s room for a while with tears in your eyes. You go back to your room. The broken window is not boarded yet; You throw yourself out of the window.</p><p>THUD!</p>Waking yourself up, you run as fast as you can. You trip over a stone. Your chest starts hurting, and the air is less and less filling, but you don\'t try to breathe this time. Everything blurs, and the last thing that you see before closing your eyes is a cat sitting next you.</p>' });
                    var choices = new SchrodingersCat.Choices();
                    passage.set({ choices: choices });
                    that.mPassages.add(passage);
                }
                // act 3: love-shout-inhaler
                var passage = new SchrodingersCat.Passage({ name: 'love-shout-inhaler', isLast: true, context: '<p>Laughing, he grabs the inhalers, and runs away. The broken window is not boarded yet. You check there is a trashcan under the window, and throw yourself out of the window.</p><p>THUD!</p><p>"Gilly, Gilly!"</p><p>Leaving behind your mother\'s call, covering your mouth with your left hand, holding your inhaler with another hand, you chase him into the fog. Suddenly, your chest starts hurting. You gasp for air, still trying to force, the whimpers down. With every breath the air is less and less filling. Everything blurs, and the last thing that you see before closing your eyes is a cat is approaching you.</p>' });
                var choices = new SchrodingersCat.Choices();
                passage.set({ choices: choices });
                that.mPassages.add(passage);
            }
            /*
            
            // act 3:
            var passage = new Passage({ name: '', isLast: false, context: '<p></p>' });
            var choices = new Choices();
            choices.add(new Choice({ context: '', next: '', variable: '', value: '' }));
            choices.add(new Choice({ context: '', next: '', variable: '', value: '' }));
            passage.set({ choices: choices });
            that.mPassages.add(passage);
            
            
             */
        };
        Model.prototype.getChapters = function () {
            return this.mChapters;
        };
        Model.prototype.getPassages = function () {
            return this.mPassages;
        };
        Model.prototype.getVariables = function () {
            return this.mVariables;
        };
        Model.prototype.fetchVariables = function (cnum) {
            var that = this;
            that.mVariables.fetch({
                remove: true,
                processData: true,
                data: {
                    names: Variable_Array,
                },
                success: function (collection, response, options) {
                    that.initializeVariables(cnum);
                },
                error: function (collection, jqxhr, options) {
                    console.log("error");
                },
            });
        };
        return Model;
    })();
    SchrodingersCat.Model = Model;
})(SchrodingersCat || (SchrodingersCat = {}));
