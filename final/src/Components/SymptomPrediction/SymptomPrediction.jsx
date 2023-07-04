import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const symptoms = [
  { id: 1, name: "Abdominal Pain (Stomach Pain), Long-term" },
  { id: 2, name: "Abdominal Pain (Stomach Pain), Short-term" },
  { id: 3, name: "Ankle Problem" },
  { id: 4, name: "Chest Problem in Infants and Children" },
  { id: 5, name: "Chest Pain, Acute" },
  { id: 6, name: "Cold and Flu" },
  { id: 7, name: "Cough" },
  { id: 8, name: "Diarrhea" },
  { id: 9, name: "Ear Problems" },
  { id: 10, name: "Elimination Problem or Consitpation" },
  { id: 11, name: "Eye Problem" },
  { id: 12, name: "Face Swelling" },
  { id: 13, name: "Fever" },
  { id: 14, name: "Foot Problems" },
  { id: 15, name: "Hair Loss" },
  { id: 16, name: "Arm Problems" },
  { id: 17, name: "Headaches" },
  { id: 18, name: "Hip Problems" },
  { id: 19, name: "Knee Problem" },
  { id: 20, name: "Menstrual Cycle Problem" },
  { id: 21, name: "Nausea and Vomiting" },

  // Add more symptoms as needed
];

const diseasesData = {
  "Abdominal Pain (Stomach Pain), Long-term": ["Does your pain get worse after you eat a big meal?", "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?", "Is the pain relieved by antacids? Is your pain improved by eating?", "Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?", "Has your appetite decreased? Have you lost 10 to 15 pounds over the past few months without trying?", "Do your skin or eyes have a yellow color, or is your urine dark, or are your stools turning white?"],

  "Abdominal Pain (Stomach Pain), Short-term": ["Do you have abdominal pain that is severe", "Are you pregnant, or do you believe you might be pregnant?", "Is your stomach very tender to touch? Does it hurt when you are driving and hit a bump or a pothole in the road?", "Do you have a sudden sharp pain that starts in the back near the ribs and moves down toward the groin?", "Do you have a mild pain, discomfort, or a feeling of pressure in the lower abdomen along with a burning sensation when you urinate?", "Do you have pain or a burning sensation in the upper abdomen that is either relieved or gets worse when you eat?", "Do you have watery diarrhea, fever, muscle aches, chills, nausea, or vomiting?"],

  "Ankle Problem": ["Did you begin to have pain and/or swelling after the ankle was hit?", "Is the ankle significantly swollen, and is the pain so intense that you can’t put weight on that foot?", "Is the ankle swollen and bruised, and can you still put weight on that foot?", "Do you have a fever, and is one or more of your joints painful, swollen, and red?", "Did the pain start suddenly, and is it painful when clothing or bedding rubs against your ankle?", "Do you usually feel pain before or during a change in the weather, and/or are you experiencing swelling, stiffness, and pain that gets worse during or after you use your ankle?"],

  "Chest Problem in Infants and Children": ["Does your child have a fever, a cough that produces mucus, and shortness of breath?", "Does your child have a tight cough, wheezing, and shortness of breath?", "Does your child have a dry cough and a sharp pain in the chest when he or she takes a deep breath?", "Does your child have sudden, sharp pain in one side of the chest with sudden shortness of breath?", "Does your child have a high fever, a very sore throat, and trouble breathing and/or swallowing?", "Does your child have pain and tenderness in the front of the chest, along the border of the breastbone and ribs, and does it get worse when your child coughs or takes a deep breath?"],

  "Chest Pain, Acute": ["Do you have severe chest pain?", "Do you have symptoms of a cold or the flu, such as fever, aches, chills, runny nose, and/or cough?", "Do you have a cough that produces greenish, yellowish, or tan mucus, a fever, and shortness of breath?", "Do you have a cough that produces a small amount of clear mucus, and does your chest hurt when you take a deep breath?", "Are you uncomfortable from your shortness of breath?", "Does the pain or discomfort occur only when you swallow or after you eat?", "Do you have a severe, sharp pain on one side of your chest when you take a deep breath?", "Do you have pressure in your chest, shortness of breath and numbness around your lips or in your hands or feet?", "Do you have a painful, blistering rash on your chest or back?", "Do you have back pain that radiates around to the front of your chest?"],

  "Cold and Flu": ["Do you have a sore throat and headache without nasal drainage or a cough?", "Did your symptoms start suddenly, and do you have a combination of symptoms including muscle aches, fatigue, chills, sore throat, runny nose, and/or cough?", "Are you experiencing wheezing, shortness of breath, and a persistent cough that brings up clear, yellow, or green mucus?", "Do you have a headache or muscle aches, nausea or vomiting, and watery diarrhea?", "Are you experiencing a runny and/or itchy nose, sneezing, and itchy eyes that get worse when you are outside or around certain triggers?", "Are you experiencing sneezing, a sore throat with a cough, a headache, congestion, and a runny nose?", "Do you have pressure or pain around your eyes, cheeks, nose, or forehead; nasal congestion; a headache; a dry cough; and/or any type of discharge from your nose?"],

  "Cough": ["Are you very short of breath, and are you coughing up pink, frothy mucus?", "Does your cough produce clear or pale yellow mucus?", "Does your cough produce yellow, tan, or green mucus?", "Does the cough come with shortness of breath and wheezing?", "Do you have heart problems?", "Have you recently started having sharp chest pain, rapid heartbeat, swelling of the legs and sudden shortness of breath?", "Have you unintentionally lost weight?", "Did you inhale dust, particles, or an object?", "Has you cough lasted longer than 6 weeks?"],

  "Diarrhea": ["Are you also nauseated or vomiting?", "Did you recently start taking an antibiotic or other new over-the-counter or prescribed medicine or supplement?", "Did your symptoms begin 30 minutes to 2 hours after eating or drinking dairy products?", "Did your diarrhea develop within 2-8 hours after eating food", "Have you traveled recently to another country?", "Do you have sharp pain in the lower left side of your abdomen, and are you often constipated?", "Is your diarrhea watery, and do you have a headache or muscle aches and a low fever?", "Do you have persistent, severe abdominal cramps, gas, and watery diarrhea followed by greasy stools?", "Do you have a fever, and are you experiencing pain in the middle or upper abdomen that radiates to your back?", "Are you bloated, and are you experiencing severe lower abdominal pain or cramping?", "Do you have diarrhea along with gas, bloating, and stomach pains every time you eat certain foods?"],

  "Ear Problems": ["Are you experiencing pain deep in the ear", "Do you have redness and swelling of the outer ear and the surrounding skin?", "Do you have headache-type pain and redness behind your ear", "Do you have thick pus-filled (white) or bloody drainage from the ear canal that started after a sharp, sudden pain?", "Is your ear swollen, and does it itch or hurt when you pull on your ear or earlobe?", "Do you have swelling or thickening of one or more ears after wrestling or doing another contact sport or fighting event", "Is fullness of the ear present on one or both sides without any other symptoms? Does the person have a history of ear wax production?", "Can you see or feel a “pimple” in the ear canal?"],

  "Elimination Problem or Consitpation": ["Is the affected person an infant (under 1 year) or a child?", "Do you have pain or discomfort with your bowel movements?", "Do you have blood on, or mucous in, your bowel movements?", "Do you have to strain when you have a bowel movement", "Do you have a fever, chills, and intense pain near the anus even when you’re not having a bowel movement?", "Is there itching when you have a bowel movement?", "Do you have a small reddish mass of tissue sticking out of your anus?", "Is there occasional bright red blood in your stools, and do you have 1 or more small lumps near the rectum?", "Do you have itching around your rectum even when you’re not having a bowel movement?", "Are your bowel movements gray or whitish?", "Do you have problems moving your bowels without a laxative or enema?"],

  "Eye Problem": ["Do you have blurred vision?", "Have you recently injured your eye?", "Is your eye red, and do you have severe eye pain, or has your vision suddenly decreased or become cloudy?", "Are you experiencing flu-like symptoms, such as fever, fatigue, muscle aches, and pain in one or both temples?", "Do you have thick nasal drainage and pain or pressure on your forehead and behind your eyes?", "Are your eyes red or sensitive to light, are you experiencing eye pain, and do you see dark, floating spots?", "Do you have diabetes, and have you noticed any changes in your vision?", "Are your eyes red, itchy, or swollen, or is there a bite-like swelling on one of your eyelids?", "Do you have a fever, and is your eyelid swollen, red, and/or tender to the touch?", "Is there a firm, painful lump in the eyelid or a tender ‘pimple’ on the edge of the eyelid?", "Is your eye red, is your vision blurry, and do you feel like you have sand in your eye (foreign body sensation)?", "Is the white of the eye pink, red, or irritated, and is there any secretion or mucus coming from the eye?", "Do you wear contact lenses, and do you have eye pain?"],

  "Face Swelling": ["Do you have a painless, soft to firm lump on your head, face, or neck? Do you see a pore or small hole at the top of the bump?", "Are your lips and eyes swollen and do you have a rash that looks like mosquito bites?", "Do you have a painful pink or red bump, or a group of smaller bumps on your forehead or face?", "Do you have red, flaky, oily areas near the edges of your scalp, in the side folds of your nose, or on your cheeks?", "Do you have painful swelling near one or both ears, and do you have fever along with pain when chewing or swallowing?", "Do you have reddish, raised, excessive tissue that seems to be growing around the area of a scar or piercing?"],

  "Fever": ["Does your fever come and go and does your temperature stay between 97° and 102°F?", "Have you had a fever for weeks, along with tiredness and a sore throat?", "Do you have a fever between 101°F and 103°F?", "Do you have a sore throat and headache, but no cough?", "Do you have a sore throat, a dry cough, tiredness, mild headaches, or muscle aches?", "Do you have aches, chills, nausea, vomiting, cramps, or watery diarrhea?", "Are you short of breath and do you have a cough that produces red, yellow, green, or tan mucus?", "Have you lost weight unintentionally, and do you have a fever that comes and goes, night sweats (drenching your bed sheets or bedclothes), or swollen lymph nodes?", "Do you have stomach pain, nausea, and/or vomiting?", "Do you have a rash that’s red, tender and warm, or a red streak on your arm or leg?", "Do you have an earache?", "Have you been outside under high temperatures and are you feeling nauseous or faint?", "Have you recently started taking a new medicine?", "Is your temperature consistently above 103°?", "Are you short of breath or are you coughing up mucus or blood?", "Are you experiencing pain or burning when you urinate, or do you have back or abdominal pain, along with nausea/vomiting?", "Do you have a severe headache, neck stiffness, drowsiness, and vomiting, and are your eyes sensitive to light or are your ears sensitive to sound?", "Have you been outside in extremely hot weather, and are you hot but not sweating, possibly feeling faint or having some confusion?"],


  "Foot Problems": ["Is the person a child or a newborn with a foot deformity?", "Is the person a child or a toddler with toes that point in?", "Did your foot pain begin after intense physical activity, or has the pain slowly worsened over an extended period of time?", "Did your foot pain or swelling begin with an injury or accident?", "Is there swelling or redness on top of your foot?", "Are you unable to stand or walk on your foot and is your foot swollen or bruised?", "Is there pain on the bottom of your foot between the ball and the heel?", "Is the pain only in one toe and did it start after you hit, twisted, or jammed the toe?", "Is the pain only in one toe and did it start after you hit, twisted, or jammed the toe?", "Do you have a fever and are your joints tender, sore, red, or swollen?", "Do you have a red, swollen big toe that hurts when anything touches it?", "Do you have intense pain near your heel when you put weight on it?", "Do you have a moist, white, or red area of peeling skin and itching between your toes, and/or scaling and itching skin on your foot, often in a “moccasin distribution”?", "Have your toes or feet been exposed to very cold temperatures?"],

  "Hair Loss": ["Is your hair falling out in small patches? Are these patches red, itchy, or oily?", "Are you a man who has gradually lost hair in the front or on the top of your head and has relatives with similar hair loss?", "Have you used any chemicals on your hair, or have you worn tight braids or cornrows recently?", "Are you taking any new medicines, or are you being treated for cancer?", "Have you been weak, tired, or anxious?", "Are you a woman who is older than 50, or have you given birth within the last three months?", "Do you have a completely smooth patch where you lost hair with no broken or smaller hairs noted in the area?", "Have you lost all of the hair all over your scalp? Or have you lost all of your hair all over your entire body? This would include eyebrows, genitals, armpits, face, etc.?"],

  "Arm Problems": ["Is the affected area deformed or swollen?", "Does the pain get worse when you move your arm, hand, or wrist?", "Does the pain get worse with repetitive movement (e.g., while working or playing a sport)?”", "Is it painful to grip a doorknob, and does the pain start on the outside of your elbow and move down your arm to your wrist?", "Do you have numbness or pain in your fingers, hand, wrist, or arm, especially when you flex your wrist (i.e., bend your palm toward your forearm)?", "Do you have a firm lump or swelling near your wrist or finger joints?", "Are one or more joints swollen and tender? Do you have a fever?", "Does your thumb hurt with gripping, typing, or writing with a pencil or pen?"],


  "Headaches": ["Do you have a fever, cold symptoms, nausea, vomiting, or diarrhea?", "Do you have a severe headache, stiff neck, vomiting, and does normal light hurt your eyes, or do normal sounds hurt your ears?", "Have you injured your head or been knocked out recently?", "Do you have numbness, tingling, or weakness in the arms and legs, or do you have trouble speaking or understanding speech?", "Do you have pressure around your eyes, or do you have congestion with yellowish-green nasal discharge and a fever?", "Do you have mild to moderate pressure or tightening around your temples, and does the pain occur during times of stress or after you have been sitting in one position for a long time?", "Do you have intense throbbing pain on one side of your head or temple, often with associated nausea or vomiting, and do see flashing lights or spots before the headache?", "Do your headaches occur after you read, watch TV, or use a computer?", "Do you get headaches and feel shaky and weak if you miss a meal?", "Are you trying to cut down on caffeine, alcohol, or some other drug?", "Do you have headaches that occur daily for several days, and do you also have eye discharge and runny nose from the same side as the headache?"],


  "Hip Problems": ["Do the toes on your leg on the side of your injured hip seem to turn out, and does it hurt to straighten, lift, or stand on your leg?", "Do you have stiffness, swelling, redness, or pain in any other joints?", "Have you felt a “click” in your hip or occasional pain with activity?","Do you have pain in the back of your hip that starts in your lower back and travels into your buttocks or into your leg?","Is the person a child with pain in the knees, hips, or groin?","Do you have pain in your hip that is also on the outside (lateral) part of your knee?"],



  "Knee Problem": ["Did your knee pain or swelling begin after a fall, twisting injury, or after your knee was hit by an object or person?", "Is your knee deformed?", "Is your kneecap swollen, tender, and warm, and do you have pain with activity?","Is your knee tender and swollen, and does the pain get worse after sitting for a long time or after using the stairs?","Do you have a sharp pain behind your knee and is it painful to extend (stretch out straight) your leg?","Is your knee swollen and/or red?","Do you have a fever along with swollen and/or red joints?","Has your knee become tender over many months or years and does the pain get worse when the weather changes?","Is the back of your knee swollen or tender?"],
  

  "Menstrual Cycle Problem": ["Do you have abdominal or pelvic pain during sex, ovulation, or bowel movements?", "Are your periods heavier or are you bleeding longer than usual?", "Do you use an intrauterine device (IUD) for birth control (contraception)?","Do you have a constant feeling that you need to urinate, or do you have pelvic pressure, constipation, or pain in your back or legs?", "Do you have muscle aches, swelling, or stiffness in your joints, tightness or swelling in your throat, and/or weakness in your legs?", "Are your periods irregular, infrequent, or have they stopped?", "Do you have breast tenderness, abdominal fullness, or nausea?", "Are you on birth control pills?", "Are you 35 years old or older?", "Have you felt sluggish, or have you gained or lost weight without trying?"],

  "Nausea and Vomiting": ["Do you have a fever along with nausea and vomiting?", "Along with nausea and vomiting, do you also have dark urine and/or a yellow discoloration of your skin or the whites of your eyes, or are your stools turning white along with other cold and flu-like symptoms?", "Do you have cold and flu symptoms along with nausea, vomiting and/or diarrhea?", "Do you have a sharp pain that started in the middle of your abdomen by your belly button, but is now in the right lower quadrant, and have you lost your appetite?", "Do you have a headache or stiff neck, and do normal amounts of light hurt your eyes?", "Do you have pain in your right upper abdomen or do greasy foods make the pain worse?", "Do you have a burning pain in your abdomen between your breastbone and belly button? Does the pain often get better after eating?", "Did your sickness occur shortly after eating food? Did someone else also get the same symptoms after eating the same food?", "Have you vomited blood and/or had black, tarry stools? Does your vomit look like coffee grounds?","Do you have a burning feeling in your lower chest, along with a sour or bitter taste in your throat and mouth, especially after eating?","Are you taking any medicine, herbs, or vitamins?", "Have you missed a period or could you be pregnant?","Do you have diabetes or are you at risk of having diabetes?","Did you recently hit your head and now have a headache, blurred vision, or new numbness or tingling somewhere on your body?"],
  // "Symptom 3": ["", "", ""],
  // Add more symptom-disease mappings as needed
};

const treatmentData = {
  "Does your pain get worse after you eat a big meal?": {
    heading: "Your problem may be a HIATAL HERNIA.",
    content: "See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort.",
  },
  "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?": {
    heading: "Your problem may be a HIATAL HERNIA.",
    content: "See your doctor. Eat more frequent, but smaller meals. Avoid eating 2-3 hours before bed. Don’t lie down right after you eat. Elevate the head of your bed with textbooks, boards, or bricks under the headboard or front feet of your bed to reduce discomfort.",
  },
  "Is the pain relieved by antacids? Is your pain improved by eating?": {
    heading: "Your pain may be from GASTRITIS, an ULCER, or HEARTBURN. All are irritations of the stomach and esophagus.",
    content: "Eat smaller meals and use an over-the-counter antacid. If antacids don’t help and/or you find yourself using them more days than not in the average week, see your doctor.",
  },
  "Does the pain start in your upper middle or upper right abdomen, and is it brought on by greasy or fatty foods?": {
    heading: "Your pain may be a sign of GALLSTONES or CHOLECYSTITIS (inflammation or infection of the gallbladder).",
    content: "See your doctor.",
  },
  "Has your appetite decreased? Have you lost 10 to 15 pounds over the past few months without trying?": {
    heading: "Unintentional weight loss can be a sign of a serious condition, such as CANCER.",
    content: "See your doctor.",
  },
  "Do your skin or eyes have a yellow color, or is your urine dark, or are your stools turning white?": {
    heading: "You may have HEPATITIS, a serious infection of the liver.",
    content: "See your doctor.",
  },
  "Do you have abdominal pain that is severe": {
    heading: "In pregnant women, lower abdominal or pelvic pain along with vaginal bleeding may be a sign of a serious condition, such as ECTOPIC PREGNANCY or MISCARRIAGE.",
    content: "Call your doctor right away or go to the emergency room if you are less than 20 weeks pregnant. Go to the labor and delivery department if you are over 20 weeks pregnant.",
  },
  "Are you pregnant, or do you believe you might be pregnant?": {
    heading: "In pregnant women, lower abdominal or pelvic pain along with vaginal bleeding may be a sign of a serious condition, such as ECTOPIC PREGNANCY or MISCARRIAGE.",
    content: "Call your doctor right away or go to the emergency room if you are less than 20 weeks pregnant. Go to the labor and delivery department if you are over 20 weeks pregnant.",
  },
  "Is your stomach very tender to touch? Does it hurt when you are driving and hit a bump or a pothole in the road?": {
    heading: "These may be signs of a serious problem, such as APPENDICITIS OR PERFORATED APPENDIX INFECTIOUS DIARRHEA DIVERTICULITIS or ULCER PANCREATITIS BOWEL BLOCKAGE",
    content: "Call your doctor right away or go the hospital.",
  },
  "Do you have a sudden sharp pain that starts in the back near the ribs and moves down toward the groin?": {
    heading: "Your pain may be from a KIDNEY STONE or KIDNEY TUMOR. If you have a fever, you may have a KIDNEY or BLADDER INFECTION.",
    content: "Call your doctor right away or go the hospital.",
  },
  "Do you have a mild pain, discomfort, or a feeling of pressure in the lower abdomen along with a burning sensation when you urinate?": {
    heading: "CYSTITIS, an infection of the urinary tract, can be painful and cause abdominal discomfort.",
    content: "See your doctor promptly.",
  },
  "Do you have pain or a burning sensation in the upper abdomen that is either relieved or gets worse when you eat?": {
    heading: "This may be from GASTRITIS, an irritation of the stomach, or from an ULCER.",
    content: "Try taking an over-the-counter antacid on a regular basis. See your doctor if an antacid doesn’t help, if the pain comes back quickly after taking one, or if you are taking an antacid most days of an average week.",
  },
  "Do you have watery diarrhea, fever, muscle aches, chills, nausea, or vomiting?": {
    heading: "You may have GASTROENTERITIS, commonly called the stomach flu. Severe cases of gastroenteritis can lead to dehydration in infants and young children.",
    content: "Take over-the-counter fever-reducing medicines. (Don’t give children aspirin.) Drink water throughout the day/night. Call your doctor if vomiting and diarrhea persist for more than 2 days, or if you see any blood or mucus in the diarrhea. Call your doctor if you experience DEHYDRATION with such symptoms as lethargy, dry mouth, and/or decreased urination.",
  },
  // ANKLE PROBLEMS AND THEIR SOLUTIONS
  "Did you begin to have pain and/or swelling after the ankle was hit": {
    heading: "Treatment ",
    content: "Treatment for this is we have to give it some time to recover from the damage it has got",
  },
  "Is the ankle significantly swollen, and is the pain so intense that you can’t put weight on that foot?": {
    heading: "You may have a FRACTURE or a severe SPRAIN.",
    content: "See your doctor promptly. Don’t put weight on the injured ankle.    Raise the ankle above your heart while sitting or lying down. Use a compression wrap to help control swelling. Place an ice pack wrapped in a thin, damp cloth on the swollen area. You can also consider using a soft compression brace and crutches",
  },
  "Is the ankle swollen and bruised, and can you still put weight on that foot?": {
    heading: "You may have a SPRAINED ANKLE or a FRACTURE OF THE FIBULA.",
    content: "Raise the ankle above your heart while sitting or lying down. Use a compression wrap to help control swelling. Place an ice pack wrapped in a thin, damp cloth on the swollen area. You can also consider using a soft compression brace and crutches.",
  },
  "Do you have a fever, and is one or more of your joints painful, swollen, and red?": {
    heading: "Fever and a painful, red, swollen joint may be caused by an INFECTED JOINT (also called SEPTIC ARTHRITIS). More than one affected joint may be caused by RHEUMATIC FEVER.",
    content: "URGENT",
  },
  "Did the pain start suddenly, and is it painful when clothing or bedding rubs against your ankle?": {
    heading: "You may have GOUT (swelling and pain caused by too much uric acid in your body).",
    content: "See your doctor. During a gout attack (also called a flare), rest in bed until the pain eases up. Apply an ice pack wrapped in a thin, damp cloth to your ankle. Drink extra water to help flush uric acid from your body.    Avoid alcohol and high-fat foods. They can trigger gout attacks.",
  },
  "Do you usually feel pain before or during a change in the weather, and/or are you experiencing swelling, stiffness, and pain that gets worse during or after you use your ankle?": {
    heading: "These symptoms may be caused by OSTEOARTHRITIS (also called DEGENERATIVE JOINT DISEASE). Previous surgery or trauma to the ankle can also cause these symptoms.",
    content: "See your doctor. If you have osteoarthritis, he or she can treat your symptoms with a combination of therapies.    Relieve your symptoms by applying a heating pad or an ice pack wrapped in a thin, damp cloth to your ankle. Use nonsteroidal anti-inflammatory drugs (NSAIDs) to ease the pain.",
  },


  // chest problems in infants and children
  "Does your child have a fever, a cough that produces mucus, and shortness of breath?": {
    heading: "These symptoms may be caused by BRONCHITIS. A high fever along with a cough and shortness of breath could also be a sign of PNEUMONIA.",
    content: "If your child has BRONCHITIS, be sure he or she gets lots of rest and drinks plenty of fluids.PNEUMONIA is a serious infection.  If your child has a fever and a cough producing mucous, see your doctor right away. You can have your child take children’s acetaminophen and/or ibuprofen for fever. Do not give children 5 years and under cough or cold medicines.",
  },
  "Does your child have a tight cough, wheezing, and shortness of breath?": {
    heading: "These may be symptoms of BRONCHIOLITIS.",
    content: "BRONCHIOLITIS is a serious infection. Asthma flare-ups can also be a serious problem. See your doctor right away to find out what’s causing your symptoms. Do not give children 5 years and under cough or cold medicines.",
  },
  "Does your child have a dry cough and a sharp pain in the chest when he or she takes a deep breath?": {
    heading: "These symptoms may be caused by PLEURISY, an inflammation of the lining around the lung.",
    content: "See your doctor. He or she can determine what is causing the PLEURISY. Often, an anti-inflammatory drug will help relieve symptoms. Do not give aspirin to your child. Do not give children 5 years and under cough or cold medicines.",
  },
  "Does your child have sudden, sharp pain in one side of the chest with sudden shortness of breath?": {
    heading: "In rare cases, air will leak from a lung to fill the chest cavity. This makes it difficult to breathe. This condition is called a PNEUMOTHORAX.",
    content: "See your doctor right away or go to the closest emergency room or call an ambulance. Treatment of a PNEUMOTHORAX may require hospitalization.",
  },
  "Does your child have a high fever, a very sore throat, and trouble breathing and/or swallowing?": {
    heading: "These may be signs of a serious condition called EPIGLOTTITIS.",
    content: "Get emergency medical help right away. Go to the closest emergency room or call an ambulance.",
  },
  "Does your child have pain and tenderness in the front of the chest, along the border of the breastbone and ribs, and does it get worse when your child coughs or takes a deep breath?": {
    heading: "This may be caused by COSTOCHONDRITIS, an inflammation of the rib joints in the chest.",
    content: "Heat and an anti-inflammatory medicine, such as ibuprofen, may help relieve symptoms. Do not give aspirin to your child. See your doctor if the pain is severe or if it doesn’t improve with these medicines.",
  },



  // chest pain, Acute
  "Do you have severe chest pain?": {
    heading: "These could be symptoms of HYPERVENTILATION, an episode of overbreathing often caused by stress or anxiety. It can also be caused by increased breathing when your body is not getting enough oxygen and you begin to breathe faster.",
    content: "If you have a heart condition, lung condition, ASTHMA, or if you are experiencing rapid breathing for the first time, go directly to the emergency room. If you have hyperventilated before due to stress or anxiety, your doctor may have given you information about treating yourself. Lie down, relax, and try to slow your breathing. Try breathing through pursed lips (as if you were whistling), or cover your mouth and one nostril, and breathe through the other nostril. Talk with your doctor about relaxation treatments, to include mindfulness and meditation.",
  },
  "Do you have symptoms of a cold or the flu, such as fever, aches, chills, runny nose, and/or cough?": {
    heading: "Your symptoms may be from an infection, such as PNEUMONIA.",
    content: "PNEUMONIA can be a serious health problem. See your doctor right away or go to the closest emergency room if you are having trouble breathing.",
  },
  "Do you have a cough that produces greenish, yellowish, or tan mucus, a fever, and shortness of breath?": {
    heading: "Your symptoms may be from an infection, such as PNEUMONIA.",
    content: "PNEUMONIA can be a serious health problem. See your doctor right away or go to the closest emergency room if you are having trouble breathing.",
  },
  "Do you have a cough that produces a small amount of clear mucus, and does your chest hurt when you take a deep breath?": {
    heading: "You may have VIRAL BRONCHITIS. Your pain may also be caused by PLEURISY, an irritation of the lining of the lung that is usually caused by a viral infection. Hard coughing may also cause pain in the muscles and chest wall.",
    content: "Drink plenty of water, and try cough and cold medicines and/or anti-inflammatory medicines to relieve your symptoms. See your doctor if the cough continues for more than a few days or if you develop a fever.",
  },
  "Are you uncomfortable from your shortness of breath?": {
    heading: "Your pain may be from a HEART ATTACK or MYOCARDIAL INFARCTION. Similar to men, chest pain is the most common HEART ATTACK symptom in women. However, women are more likely than men to experience the following symptoms (with or without chest pain) when having a heart attack: abdominal pain, feeling lightheaded or dizzy, back or jaw pain, and unexplained fatigue.",
    content: "Call an ambulance right away or have someone drive you to the closest emergency room.",
  },
  "Does the pain or discomfort occur only when you swallow or after you eat?": {
    heading: "Your pain may be from an irritation of the stomach called GASTRITIS or an irritation of the esophagus called ESOPHAGITIS. A HIATAL HERNIA (a weakness in the diaphragm) or esophageal spasms may also cause this type of pain and discomfort. Trouble swallowing food (feeling like food gets stuck) is called DYSPHAGIA and should be evaluated.",
    content: "Try taking an antacid, eat smaller, more frequent, and less spicy meals. See your doctor if the problem persists or if you have DYSPHAGIA.",
  },
  "Do you have a severe, sharp pain on one side of your chest when you take a deep breath?": {
    heading: "Your pain may indicate PNEUMOTHORAX, a condition in which air leaks from a lung and fills the chest cavity. This makes it difficult to breathe.",
    content: "See your doctor right away or go to the closest emergency room. Treatment of PNEUMOTHORAX may require hospitalization.",
  },
  "Do you have pressure in your chest, shortness of breath and numbness around your lips or in your hands or feet?": {
    heading: "These could be symptoms of HYPERVENTILATION, an episode of overbreathing often caused by stress or anxiety. It can also be caused by increased breathing when your body is not getting enough oxygen and you begin to breathe faster.",
    content: "If you have a heart condition, lung condition, ASTHMA, or if you are experiencing rapid breathing for the first time, go directly to the emergency room. If you have hyperventilated before due to stress or anxiety, your doctor may have given you information about treating yourself. Lie down, relax, and try to slow your breathing. Try breathing through pursed lips (as if you were whistling), or cover your mouth and one nostril, and breathe through the other nostril. Talk with your doctor about relaxation treatments, to include mindfulness and meditation.",
  },
  "Do you have a painful, blistering rash on your chest or back?": {
    heading: "You may have a viral infection of the nerves and skin called SHINGLES, caused by the varicella zoster virus. This can often occur even if you have received the SHINGLES vaccine.",
    content: "See your doctor. SHINGLES usually clears on its own, but medication may ease the pain and help prevent complications, such as chronic pain at the site.",
  },
  "Do you have back pain that radiates around to the front of your chest?": {
    heading: "Your pain may be from a compressed nerve, possibly from a COMPRESSION FRACTURE, RIB FRACTURE, or a condition known as COSTOCHONDRITIS.",
    content: "See your doctor. You can take anti-inflammatory medications for COSTOCHONDRITIS.",
  },


  // cold and flu fewer treatment
  "Do you have a sore throat and headache without nasal drainage or a cough?": {
    heading: "You may have STREP THROAT, an infection caused by bacteria.",
    content: "See your doctor if your sore throat or fever lasts longer than 48 hours. He or she can do a test to find out if you have strep throat. If you do, your doctor may give you an antibiotic to treat it. You should also get plenty of rest and drink lots of water. Gargling with warm salt water (1/4 teaspoon of salt in 1 cup [8 ounces] of warm water) may help relieve your sore throat.",
  },
  "Did your symptoms start suddenly, and do you have a combination of symptoms including muscle aches, fatigue, chills, sore throat, runny nose, and/or cough?": {
    heading: "You may have a viral infection, possibly INFLUENZA (also known as the FLU).",
    content: "If you see your doctor within 48 hours of the start of your symptoms, he or she may prescribe an antiviral medicine to shorten the course of the flu.Get plenty of rest and drink lots of fluids. Over-the-counter (OTC) cough and cold medicines may relieve some of your symptoms. Don’t give OTC cough and cold medicines to a child younger than 4 years of age unless your child’s doctor says it’s okay.Remember, you can prevent the flu by getting a flu shot each fall.",
  },
  "Are you experiencing wheezing, shortness of breath, and a persistent cough that brings up clear, yellow, or green mucus?": {
    heading: "You may have ACUTE BRONCHITIS, an inflammation of the airways that is most often caused by a viral infection.",
    content: "Get plenty of rest and drink lots of fluids. Using a cool-mist humidifier may also relieve some of your symptoms. If you smoke, quitting is the best way to help your airways heal faster. Antibiotics do not work against the viruses that cause most cases of acute bronchitis. An over-the-counter (OTC) medicine can reduce inflammation, ease pain, and lower your fever. An expectorant (medicine that thins mucus) can help your cough clear mucus from your airways. Don’t give over-the-counter (OTC) cough and cold medicines to a child younger than 4 years of age unless your child’s doctor says it’s okay. If you are wheezing, you might need inhaled medicine. Your doctor will decide if this treatment is right for you.",
  },
  "Do you have a headache or muscle aches, nausea or vomiting, and watery diarrhea?": {
    heading: "You may have viral GASTROENTERITIS. Many people call it the STOMACH FLU, but it is not the same as influenza.",
    content: "Get plenty of rest and stay hydrated. Ease back into eating with bland foods and clear liquids. Children who have gastroenteritis should be given an oral rehydration solution (ORS) to avoid dehydration.",
  },
  "Are you experiencing a runny and/or itchy nose, sneezing, and itchy eyes that get worse when you are outside or around certain triggers?": {
    heading: "You may have ALLERGIC RHINITIS, an allergic reaction to triggers such as tree, grass, or weed pollen; animal dander from cats and dogs; mold; and dust mites.",
    content: "Try an over-the-counter (OTC) antihistamine medicine or an OTC nasal steroid spray. If your symptoms are getting worse or are hard to control, contact your doctor.",
  },
  "Are you experiencing sneezing, a sore throat with a cough, a headache, congestion, and a runny nose?": {
    heading: "You probably have a viral infection, commonly called a COLD.",
    content: "Get plenty of rest and drink lots of fluids. Try an over-the-counter (OTC) cough and cold medicine to treat the specific symptoms you are having. Don’t give OTC cough and cold medicines to a child younger than 4 years of age unless your child’s doctor says it’s okay.",
  },
  "Do you have pressure or pain around your eyes, cheeks, nose, or forehead; nasal congestion; a headache; a dry cough; and/or any type of discharge from your nose?": {
    heading: "You may be developing a viral or bacterial infection called SINUSITIS.",
    content: "Get plenty of rest and drink lots of water. Over-the-counter (OTC) pain relievers may help reduce facial pain. Holding a warm, wet towel against your face or breathing in steam through a warm cloth or towel can relieve sinus pressure and help open your sinus passages. A cool-mist humidifier may help your sinuses drain more easily. Contact your doctor if your symptoms last longer than 10 days or if your symptoms start to get better but then suddenly get worse again. Severe cases of sinusitis caused by bacteria may require an antibiotic.",
  },



  // cough cough
  "Are you very short of breath, and are you coughing up pink, frothy mucus?": {
    heading: "Your symptoms may be from a serious condition called PULMONARY EDEMA (fluid in the lungs).",
    content: "Have someone drive you to the nearest emergency room or call an ambulance right away.",
  },
  "Does your cough produce clear or pale yellow mucus?": {
    heading: "You likely have a viral infection, which includes the FLU.",
    content: "If it is within 48-72 hours from the beginning of symptoms, there are medications that your doctor can prescribe if you test positive for, or they suspect the FLU. If it is outside the 48-72-hour window or it is not the flu, then symptomatic treatment (treating cough, headache, sinus congestion, sore throat, etc. can be accomplished with an over-the-counter cough and cold medication). Get plenty of rest and drink plenty of water. Call your doctor if you have a high fever (>101.5°F) or your symptoms persist for more than 5 days.",
  },
  "Does your cough produce yellow, tan, or green mucus?": {
    heading: "You may have an infection of the airways, such as CHRONIC BRONCHITIS. If you have a fever with shaking chills and are very ill, you may have a more serious infection, such as PNEUMONIA.",
    content: "See your doctor or go to the closest emergency room if you are having trouble breathing. Your doctor can prescribe medicine to relieve your symptoms. Get plenty of rest, and drink lots of fluids. If you smoke, stop smoking.",
  },
  "Does the cough come with shortness of breath and wheezing?": {
    heading: "These symptoms may be a sign of ASTHMA, a closure or restriction of the airways.",
    content: "Asthma can be dangerous and should be diagnosed and treated by your doctor. Make sure that you get your annual influenza vaccination. If you feel that you can’t catch your breath or can’t stop coughing, then have someone drive you to the closest emergency room or call an ambulance.",
  },
  "Do you have heart problems?": {
    heading: "Treatment for Disease I",
    content: "Look for a Doctor who",
  },
  "Have you recently started having sharp chest pain, rapid heartbeat, swelling of the legs and sudden shortness of breath?": {
    heading: "These symptoms may be caused by TUBERCULOSIS or another type of infection.",
    content: "Have someone drive you to the closest emergency room or call an ambulance.",
  },
  "Have you unintentionally lost weight?": {
    heading: "This may be a sign of a serious illness, such as LUNG CANCER. Other signs of lung cancer may include a cough that produces bloody sputum, shortness of breath and wheezing.",
    content: "See your doctor right away.",
  },
  "Did you inhale dust, particles, or an object?": {
    heading: "Irritation of the airways will cause coughing to attempt to clear the object or irritation out of the airway.",
    content: "If you smoke, stop smoking. If the coughing is severe or if you don’t believe the irritant has been cleared from your airway, see your doctor or go to the emergency room right away.",
  },
  "Has you cough lasted longer than 6 weeks?": {
    heading: "This is known as CHRONIC COUGH. The three most common causes are UPPER AIRWAY COUGH SYNDROME, ASTHMA, and ACID REFLUX.",
    content: "UPPER AIRWAY COUGH SYNDROME is usually due to environmental exposures, such as ALLERGIC RHINITIS. This can be caused by triggers like pollen, weeds, cat/dog dander, mold, dust, etc. Treat with antihistamines and see your doctor. for consideration of an inhaled nasal steroid and potentially allergy shots.",
  },

  // diarrhea symptom and diagnostic
  "Are you also nauseated or vomiting?": {
    heading: "Your diarrhea may be a side effect or adverse reaction caused by the medicine.",
    content: "Talk to your doctor about the antibiotic or medicine you’re taking. He or she may be able to prescribe a medicine that won’t cause diarrhea. However, don’t stop taking your current medicine unless your doctor tells you.",
  },
  "Did you recently start taking an antibiotic or other new over-the-counter or prescribed medicine or supplement?": {
    heading: "Your diarrhea may be a side effect or adverse reaction caused by the medicine.",
    content: "Talk to your doctor about the antibiotic or medicine you’re taking. He or she may be able to prescribe a medicine that won’t cause diarrhea. However, don’t stop taking your current medicine unless your doctor tells you.",
  },
  "Did your symptoms begin 30 minutes to 2 hours after eating or drinking dairy products?": {
    heading: "Your symptoms may be caused by LACTOSE INTOLERANCE. People who have this condition have trouble digesting the sugar in milk and other dairy products.",
    content: "If you think you have LACTOSE INTOLERANCE, talk to your doctor. Your doctor may recommend taking lactase enzyme tablets or drops to help prevent problems. Also, avoid eating or drinking foods and beverages that make you sick.",
  },
  "Did your diarrhea develop within 2-8 hours after eating food": {
    heading: "You may have FOOD POISONING. Other symptoms of FOOD POISONING may include headache, fever, chills, and weakness.",
    content: "Most problems caused by FOOD POISONING will clear up within 12-48 hours. In the meantime, drink plenty of fluids to avoid dehydration. Children should be given an oral rehydration solution (ORS). Avoid solid foods until the diarrhea goes away. A simple way to make a home-based ORS is to boil a cup of white rice until the rice has completely overcooked and split and the water is cloudy. Keep the water and throw out the mushy rice. The water replaces the electrolytes lost in diarrhea.",
  },
  "Have you traveled recently to another country?": {
    heading: "You may have TRAVELER’S DIARRHEA, which is caused by contaminated food or drink.",
    content: "Over-the-counter medicines may help relieve your symptoms. Drink plenty of fluids, but avoid alcohol, caffeine, and dairy products. If your symptoms persist or if you have blood or mucous in your diarrhea, call your doctor.",
  },
  "Do you have sharp pain in the lower left side of your abdomen, and are you often constipated?": {
    heading: "You may have a condition that affects the intestines, such as DIVERTICULOSIS or DIVERTICULITIS.",
    content: "See your doctor. A diet high in FIBER and water may help relieve your symptoms.",
  },
  "Is your diarrhea watery, and do you have a headache or muscle aches and a low fever?": {
    heading: "You may have GASTROENTERITIS (stomach flu).",
    content: "Get plenty of rest. Children who have GASTROENTERITIS should be given an oral rehydration solution (ORS) to prevent dehydration. A simple way to make a home-based ORS is to boil a cup of white rice until the rice has completely overcooked and split and the water is cloudy. Keep the water and throw out the mushy rice. The water replaces the electrolytes lost in diarrhea.",
  },
  "Do you have persistent, severe abdominal cramps, gas, and watery diarrhea followed by greasy stools?": {
    heading: "You may have a form of BACTERIAL DIARRHEA or a parasite (GIARDIA).",
    content: "Call your doctor promptly. Be sure to drink plenty of fluids to prevent dehydration. Avoid caffeine.",
  },
  "Do you have a fever, and are you experiencing pain in the middle or upper abdomen that radiates to your back?": {
    heading: "You may have GALLBLADDER DISEASE, a perforated ULCER PANCREATITIS.",
    content: "Call your doctor promptly.",
  },
  "Are you bloated, and are you experiencing severe lower abdominal pain or cramping?": {
    heading: "These could be symptoms of a problem such as an INTESTINAL OBSTRUCTION or blockage.",
    content: "See your doctor right away, or go to the nearest emergency room.",
  },
  "Do you have diarrhea along with gas, bloating, and stomach pains every time you eat certain foods?": {
    heading: "MALABSORPTION problems, such as CELIAC DISEASE, can cause food-related diarrhea. Food sensitivities can also cause similar symptoms.",
    content: "Avoid the foods that make you sick, and discuss the problem with your doctor. Keep a food diary (writing down what and when you eat and when symptoms develop) to help determine patterns or triggers for your symptoms.",
  },



  // ear problems 
  "Are you experiencing pain deep in the ear": {
    heading: "You may have OTITIS MEDIA, an infection of the middle ear.",
    content: "See your doctor. Many ear infections will safely clear up on their own, but others require antibiotics.",
  },
  "Do you have redness and swelling of the outer ear and the surrounding skin?": {
    heading: "Your ear canal, outer ear, and the skin around your ear may be seriously infected.",
    content: "See your doctor right away.",
  },
  "Do you have headache-type pain and redness behind your ear": {
    heading: "Your pain may be from MASTOIDITIS, an infection of the bone just behind the ear, or from an ENLARGED LYMPH NODE.",
    content: "See your doctor right away.",
  },
  "Do you have thick pus-filled (white) or bloody drainage from the ear canal that started after a sharp, sudden pain?": {
    heading: "You may have a RUPTURED EARDRUM.",
    content: "See your doctor. Avoid infection by keeping your ear dry while it’s healing. Putting a warm heating pad on your ear may help relieve the pain.",
  },
  "Is your ear swollen, and does it itch or hurt when you pull on your ear or earlobe?": {
    heading: "Your pain may be caused by OTITIS EXTERNA, an infection of the ear canal that is also called SWIMMER’S EAR.",
    content: "See your doctor. Keep your ear dry while it’s healing. Putting a warm heating pad over your ear may help relieve the pain. You can prevent swimmer’s ear by placing 3 to 5 drops of a half-alcohol, half-white vinegar solution in the ear before and after swimming or taking showers",
  },
  "Do you have swelling or thickening of one or more ears after wrestling or doing another contact sport or fighting event": {
    heading: "This is known as CAULIFLOWER EAR and is a collection of fluid that occurs after direct trauma to the ear.",
    content: "Wearing appropriately sized ear protection during all practices, sparring, and bouts will prevent CAULIFLOWER EAR. If it develops, you can immediately have it drained and then compressed to reduce the chance that the fluid hardens and the changes become permanent.",
  },
  "Is fullness of the ear present on one or both sides without any other symptoms? Does the person have a history of ear wax production?": {
    heading: "This is likely a buildup of wax in the ear canal (CERUMINOSIS or CERUMEN IMPACTION).",
    content: "You can put 3-5 drops of warm water or 1 part warm water and 1 part white vinegar into your ear canal once per day to soften the wax. After 2-5 minutes, turn your head and lightly tug on your ear to discharge the drops. Do not insert cotton swabs into the ear canal.",
  },
  "Can you see or feel a “pimple” in the ear canal?": {
    heading: "A small INFECTION or LOCAL INFLAMMATION in the ear canal may be the cause.",
    content: "The infection/inflammation will probably go away by itself in 2 to 5 days. A mild pain reliever and warm compress may help relieve the pain. See your doctor if the pain becomes severe or if redness and warmth spread into or around the ear or if you develop fever.",
  },


  // elimination problem or constipation
  "Is the affected person an infant (under 1 year) or a child?": {
    heading: "Check out for the Food Given",
    content: "Treatment Go counsult a Doctor ",
  },
  "Do you have pain or discomfort with your bowel movements?": {
    heading: "The blood may be from internal HEMORRHOIDS. Internal HEMORRHOIDS usually don’t cause any discomfort. RECTAL CANCER is another possibility, especially if you’re over 40 years. Other signs of RECTAL CANCER may include changes in the shape of your stools (pencil-like diameter).",
    content: "See your doctor. HEMORRHOIDS are often treated with over-the-counter creams or suppositories. Soaking in warm water may also help relieve any discomfort. Your doctor will likely consider imaging if he/she is concerned about CANCER.",
  },
  "Do you have blood on, or mucous in, your bowel movements?": {
    heading: "The blood may be from internal HEMORRHOIDS. Internal HEMORRHOIDS usually don’t cause any discomfort. RECTAL CANCER is another possibility, especially if you’re over 40 years. Other signs of RECTAL CANCER may include changes in the shape of your stools (pencil-like diameter).",
    content: "See your doctor. HEMORRHOIDS are often treated with over-the-counter creams or suppositories. Soaking in warm water may also help relieve any discomfort. Your doctor will likely consider imaging if he/she is concerned about CANCER.",
  },
  "Do you have to strain when you have a bowel movement": {
    heading: "CONSTIPATION can cause these symptoms.",
    content: "Add more fiber to your diet, and drink lots of water. Over-the-counter bulk-forming laxatives may also help relieve constipation. Check the side effect lists on any medicines you are taking to see if they could be causing CONSTIPATION.",
  },
  "Do you have a fever, chills, and intense pain near the anus even when you’re not having a bowel movement?": {
    heading: "You may have HEMORRHOIDS.",
    content: "See your doctor, especially if you notice blood in your stool or in the toilet bowl after bowel movements. You can also consider over-the-counter hemorrhoid wipes or creams.",
  },
  "Is there itching when you have a bowel movement?": {
    heading: "You may have HEMORRHOIDS.",
    content: "See your doctor, especially if you notice blood in your stool or in the toilet bowl after bowel movements. You can also consider over-the-counter hemorrhoid wipes or creams.",
  },
  "Do you have a small reddish mass of tissue sticking out of your anus?": {
    heading: "You may have a RECTAL PROLAPSE. People who have this condition may feel like they can’t completely empty their bowels. They may also pass very small stools or be unable to control their bowel movements.",
    content: "See your doctor.",
  },
  "Is there occasional bright red blood in your stools, and do you have 1 or more small lumps near the rectum?": {
    heading: "You may have HEMORRHOIDS. If the lump is painful to the touch or throbbing in nature, it may be a THROMBOSED HEMORRHOID.",
    content: "For general HEMORRHOIDS use an over-the-counter hemorrhoidal cream or suppository and soaking the area in warm water may help relieve the pain and itching. If there’s no improvement in 1 to 2 weeks, or if the bleeding continues, see your doctor.For THROMBOSED HEMORRHOID, if you have acute pain that won’t stop, see your doctor or go to the emergency room.",
  },
  "Do you have itching around your rectum even when you’re not having a bowel movement?": {
    heading: "Rectal itching may be a sign of a YEAST INFECTION, ALLERGY to specific products in toilet paper, or PINWORMS (especially if itching is only present in the morning).",
    content: "Nonprescription, antifungal medications are for a YEAST INFECTION and antiparasitic medications are for PINWORMS. If you think an allergy is your problem, try using white, unscented toilet paper. See your doctor if your symptoms don’t improve.",
  },
  "Are your bowel movements gray or whitish?": {
    heading: "You may have a BLOCKAGE in or near your gallbladder, or you may have LIVER DISEASE or an infection like HEPATITIS.",
    content: "See your doctor right away.",
  },
  "Do you have problems moving your bowels without a laxative or enema?": {
    heading: "CONSTIPATION, along with overuse of laxatives can cause dependence on them.",
    content: "Avoid using laxatives. Instead, try adding more fiber to your diet, and drink lots of water. Keep in mind that it isn’t necessary to have a bowel movement every day. A normal range is 3 times a day to 2 times a week.",
  },


  //eye problem releated questions 
  "Do you have blurred vision?": {
    heading: "You may have blurred vision",
    content: "Visit a Doctor and Do a check of your vision",
  },
  "Have you recently injured your eye?": {
    heading: "You may have a serious and urgent problem, such as a DETACHED RETINA.",
    content: "Call your eye doctor right away. Go to the closest emergency room or call an ambulance.",
  },
  "Is your eye red, and do you have severe eye pain, or has your vision suddenly decreased or become cloudy?": {
    heading: "Your symptoms may be from ACUTE GLAUCOMA, a condition caused by a rise in eye pressure that can cause permanent vision damage or blindness.",
    content: "If you have these symptoms, call your doctor right away or go to the closest emergency room or call an ambulance.",
  },
  "Are you experiencing flu-like symptoms, such as fever, fatigue, muscle aches, and pain in one or both temples?": {
    heading: "Your symptoms may be a sign of a serious inflammatory condition called TEMPORAL ARTERITIS.",
    content: "See your doctor right away.",
  },
  "Do you have thick nasal drainage and pain or pressure on your forehead and behind your eyes?": {
    heading: "SINUSITIS (a viral or bacterial  infection of the sinuses) may be the cause of your pain.",
    content: "Take a cold or sinus medicine, and drink plenty of fluids. Warm facial compresses may also help relieve the pain. If your symptoms don’t improve within 10 days, or if you have constant fever or severe pain, or your symptoms improve and then worsen again, see your doctor as soon as possible. Do not give children 5 years and under cough or cold medicines.",
  },
  "Are your eyes red or sensitive to light, are you experiencing eye pain, and do you see dark, floating spots?": {
    heading: "You may have an inflammation inside the eye called IRITIS.",
    content: "See your doctor or an eye specialist right away.",
  },
  "Do you have diabetes, and have you noticed any changes in your vision?": {
    heading: "Over time, too much glucose (sugar) in the blood can cause eye problems and damage.",
    content: "Tell your doctor about the vision changes you have experienced. He or she can give you advice on preventing eye problems. You should also make sure that you are getting a dilated eye exam at least once per year.",
  },
  "Are your eyes red, itchy, or swollen, or is there a bite-like swelling on one of your eyelids?": {
    heading: "Your symptoms may be from an ALLERGY or an INSECT BITE.",
    content: "Use a cool compress and take an antihistamine to relieve discomfort. See your doctor if the swelling doesn’t get better or if you have a fever.",
  },
  "Do you have a fever, and is your eyelid swollen, red, and/or tender to the touch?": {
    heading: "These may be signs of a serious eye infection called PERIORBITAL CELLULITIS.",
    content: "See your doctor right away.",
  },
  "Is there a firm, painful lump in the eyelid or a tender ‘pimple’ on the edge of the eyelid?": {
    heading: "You may have either a CHALAZION (in the eyelid), HORDEOLUM, or STYE (on the eyelid edge).",
    content: "A stye usually heals in 5-7 days. To relieve the pain, apply a warm compress to the area for 10-15 minutes, 4 times a day, and take mild pain relievers. Microwaving a potato and wrapping it in a cloth will provide a longer term warm compress. If the bump grows or doesn’t go away, see your doctor. If the redness spreads or swells quickly, or if you develop fever, seek medical attention promptly.",
  },
  "Is your eye red, is your vision blurry, and do you feel like you have sand in your eye (foreign body sensation)?": {
    heading: "This sensation may be from a SCRATCHED CORNEA or from a small particle (foreign body) under the eyelid.",
    content: "Rinse your eye with clean water or saline solution. You can also flush your eye under the faucet. If the sensation doesn’t go away, see your doctor as soon as possible.",
  },
  "Is the white of the eye pink, red, or irritated, and is there any secretion or mucus coming from the eye?": {
    heading: "CONJUNCTIVITIS (also called PINK EYE) can be caused by an allergy, virus, bacteria, or fungus. If it is one-sided, it is more likely to be bacterial.",
    content: "BACTERIAL CONJUNCTIVITIS is very contagious, so avoid contact with the eye and wash your hands often. Try over-the-counter eyedrops and apply a warm compress to relieve any discomfort. Remove your contacts and do not wear them until the inflammation has cleared.If there’s no improvement with a warm compress and gently cleaning the secretions in 1-2 days, you may have a more serious form of VIRAL or BACTERIAL CONJUNCTIVITIS. See your doctor promptly.",
  },
  "Do you wear contact lenses, and do you have eye pain?": {
    heading: "You may have an irritation from contact lens overuse or a more serious eye condition, such as an INFECTION, CORNEAL ABRASION, or a scratch caused by your contact lens.",
    content: "Remove your contact lenses and let your eyes rest for a while. If the redness or irritation doesn’t go away, see your eye care professional.",
  },



  // swollen faces 
  "Do you have a painless, soft to firm lump on your head, face, or neck? Do you see a pore or small hole at the top of the bump?": {
    heading: "You may have a SEBACEOUS CYST, a collection of oil under the skin. Sebaceous cysts are usually small and grow slowly. Gentle pressure on it may express a thicker/cheesy discharge.",
    content: "It is common for cysts to discharge as stated above. See your doctor if the cyst becomes tender or inflamed. Your doctor may suggest treating an inflamed cyst with injections, and may also recommend surgery to remove the cyst.",
  },
  "Are your lips and eyes swollen and do you have a rash that looks like mosquito bites?": {
    heading: "Your symptoms may be from an ALLERGIC REACTION or HIVES.",
    content: "If you have trouble breathing, your throat becomes tight, or the swelling becomes severe, see your doctor or go to the emergency room right away. If you are not having trouble breathing and the swelling is mild, you can take an over-the-counter antihistamine and call your doctor.",
  },
  "Do you have a painful pink or red bump, or a group of smaller bumps on your forehead or face?": {
    heading: "You may have a skin infection, such as BOILS, CARBUNCLES, or ACNE. A BOIL is a large, pus-filled bump. Multiple boils are called CARBUNCLES. ACNE occurs when oil glands start producing more oil and block pores. Acne can result in blackheads or whiteheads (PUSTULES), which are known as pimples.",
    content: "A warm compress may help BOILS and CARBUNCLES heal faster. See your doctor if you’re in pain or if the infection hasn’t healed in a couple of weeks. If you have ACNE, try using an over-the-counter acne medicine and washing your face 1-2 times per day with a mild soapy cleanser. Avoid picking at the pimples. See your doctor if the problem persists.",
  },
  "Do you have red, flaky, oily areas near the edges of your scalp, in the side folds of your nose, or on your cheeks?": {
    heading: "You may have a skin irritation caused by ACNE, ROSACEA, or SEBORRHEA.",
    content: "You can use over-the-counter anti-dandruff shampoo, applying it just prior to bathing, and leaving it in for 5 minutes before washing it away. See your doctor if it worsens or does not improve.",
  },
  "Do you have painful swelling near one or both ears, and do you have fever along with pain when chewing or swallowing?": {
    heading: "You may have MUMPS, a contagious viral infection that affects the glands below and in front of the ears, as well as causes enlargement of your spleen (an organ in your abdomen).",
    content: "The measles, mumps, and rubella  (MMR) vaccine prevent MUMPS. If you think you have MUMPS, see your doctor. Because this infection is caused by a virus, antibiotics aren’t effective. Get plenty of rest and drink lots of fluids. Take over-the-counter anti-inflammatory medicines to relieve the pain. Cold compresses may also help. Avoid activities that cause forceful physical contact with your abdomen.",
  },
  "Do you have reddish, raised, excessive tissue that seems to be growing around the area of a scar or piercing?": {
    heading: "You may have a KELOID. This is a benign growth that occurs at sites of previous injury to the skin.",
    content: "See your doctor. Your doctor may perform injections of corticosteroids into the KELOID or potentially consider removing it.",
  },


  // fever in us
  "Does your fever come and go and does your temperature stay between 97° and 102°F?": {
    heading: "You may have MONONUCLEOSIS (also known as MONO), which is a viral infection that can lead to swollen glands in your neck and a swollen/tender spleen (an organ in your abdomen).",
    content: "See your doctor.",
  },
  "Have you had a fever for weeks, along with tiredness and a sore throat?": {
    heading: "You may have MONONUCLEOSIS (also known as MONO), which is a viral infection that can lead to swollen glands in your neck and a swollen/tender spleen (an organ in your abdomen).",
    content: "See your doctor.",
  },
  "Do you have a fever between 101°F and 103°F?": {
    heading: "You may have MONONUCLEOSIS (also known as MONO), which is a viral infection that can lead to swollen glands in your neck and a swollen/tender spleen (an organ in your abdomen).",
    content: "See your doctor.",
  },
  "Do you have a sore throat and headache, but no cough?": {
    heading: "You may have a bacterial infection, such as STREP THROAT.",
    content: "Get plenty of rest, drink lots of fluids, and take cold and fever-reducing medicines, such as acetaminophen and/or ibuprofen. If you don’t feel better in 48 hours, see your doctor. A quick test can determine whether you have STREP THROAT. Antibiotics are effective in treating the bacteria that causes this infection.",
  },
  "Do you have a sore throat, a dry cough, tiredness, mild headaches, or muscle aches?": {
    heading: "You may have a COLD or the FLU.",
    content: "Get plenty of rest and drink lots of fluids. Over-the-counter- medicines may help relieve your symptoms. See your doctor if your symptoms become severe. Prevent the FLU by getting the flu vaccine in the fall.",
  },
  "Do you have aches, chills, nausea, vomiting, cramps, or watery diarrhea?": {
    heading: "You may have GASTROENTERITIS, an intestinal infection commonly called the STOMACH FLU.",
    content: "Get plenty of rest. Stop eating and drinking for a few hours to let your stomach settle. Ease back into eating gradually and start with bland foods (e.g., bananas, rice, applesauce, and toast). Take small, frequent sips of water or clear liquids to avoid dehydration. See your doctor if you have BLOODY DIARRHEA, if you’ve been vomiting for more than 2 days, or if you’re vomiting blood.",
  },
  "Are you short of breath and do you have a cough that produces red, yellow, green, or tan mucus?": {
    heading: "You may have a serious infection, such as TUBERCULOSIS or HIV/AIDS, or CANCER.",
    content: "See your doctor right away.",
  },
  "Have you lost weight unintentionally, and do you have a fever that comes and goes, night sweats (drenching your bed sheets or bedclothes), or swollen lymph nodes?": {
    heading: "You may have a serious infection, such as TUBERCULOSIS or HIV/AIDS, or CANCER.",
    content: "See your doctor right away.",
  },
  "Do you have stomach pain, nausea, and/or vomiting?": {
    heading: "You may have a severe medical problem, such as APPENDICITIS, DIVERTICULITIS, PANCREATITIS, HEPATITIS, or COLITIS. Each of these involve infection and/or inflammation of the gastrointestinal tract or organs in your abdomen.",
    content: "See your doctor, go to the closest emergency room right away, or call an ambulance.",
  },
  "Do you have a rash that’s red, tender and warm, or a red streak on your arm or leg?": {
    heading: "You may have an infection of the skin or lymph system, such as CELLULITIS or LYMPHANGITIS.",
    content: "Both conditions need to be treated with antibiotics. See your doctor right away.",
  },
  "Do you have an earache?": {
    heading: "You may have a middle ear infection (OTITIS MEDIA) or an outer ear infection (SWIMMER’S EAR or OTITIS EXTERNA).",
    content: "While these will likely resolve on their own, some of the infections may require treatment. See your doctor if your ear pain is severe, if your symptoms worsen, or if symptoms fail to improve within 48 hours of starting.",
  },
  "Have you been outside under high temperatures and are you feeling nauseous or faint?": {
    heading: "You may have HEAT EXHAUSTION or HEAT STROKE.",
    content: "Drink cool liquids and rest in a cool location. Lay down and elevate your legs above the level of your heart. You can also get into a cold bath or even ice water bath. Recheck your temperature often until it has returned to normal. If your temperature goes higher, have someone take you to the emergency room.",
  },
  "Have you recently started taking a new medicine?": {
    heading: "Your fever may be a side effect of your MEDICINE.",
    content: "Call your doctor.",
  },
  "Is your temperature consistently above 103°?": {
    heading: "",
    content: "Call your doctor.",
  },
  "Are you short of breath or are you coughing up mucus or blood?": {
    heading: "You may have PNEUMONIA or PULMONARY EMBOLUS.",
    content: "You may have PNEUMONIA or PULMONARY EMBOLUS.",
  },
  "Are you experiencing pain or burning when you urinate, or do you have back or abdominal pain, along with nausea/vomiting?": {
    heading: "You may have PYELONEPHRITIS, a potentially serious kidney infection.",
    content: "You may have PYELONEPHRITIS, a potentially serious kidney infection.",
  },
  "Do you have a severe headache, neck stiffness, drowsiness, and vomiting, and are your eyes sensitive to light or are your ears sensitive to sound?": {
    heading: "You may have MENINGITIS, an inflammation of the membranes that cover the brain and spinal cord.",
    content: "See your doctor, go to the closest emergency room right away, or call an ambulance.",
  },
  "Have you been outside in extremely hot weather, and are you hot but not sweating, possibly feeling faint or having some confusion?": {
    heading: "You may have HEAT STROKE or HEAT EXHAUSTION.",
    content: "Get out of the sun and go somewhere shady or with air conditioning. Have someone take you to the closest emergency room right away or call an ambulance.",
  },


  // foot problems
  "Is the person a child or a newborn with a foot deformity?": {
    heading: "Foot deformities are not unusual in newborns. CLUBFOOT is a common disorder in which one or both feet are turned inward or downward.",
    content: "Foot deformities are not unusual in newborns. CLUBFOOT is a common disorder in which one or both feet are turned inward or downward.",
  },
  "Is the person a child or a toddler with toes that point in?": {
    heading: "The cause may be INCREASED FEMORAL ANTEVERSION, INTERNAL TIBIAL TORSION, or METATARSUS ADDUCTUS (these three are commonly called intoeing).",
    content: "See your doctor. Your doctor may order imaging or may watch and see if it resolves once the child begins to walk.",
  },
  "Did your foot pain begin after intense physical activity, or has the pain slowly worsened over an extended period of time?": {
    heading: "You may have a STRESS FRACTURE of the bones in your foot. The pain from stress fractures usually decreases with rest and increases with activity.",
    content: "Apply ice to the foot and take an over-the-counter anti-inflammatory medicine to relieve pain. See your doctor if you don’t feel better within a few days.",
  },
  "Did your foot pain or swelling begin with an injury or accident?": {
    heading: "",
    content: "Visit your doctor",
  },
  "Is there swelling or redness on top of your foot?": {
    heading: "Your pain may be from damage to the skin or tendons on top of the foot.",
    content: "Use ice and an over-the-counter anti-inflammatory medicine. See your doctor if the pain doesn’t get better within a few days.",
  },
  "Are you unable to stand or walk on your foot and is your foot swollen or bruised?": {
    heading: "Your foot or ankle bone may be FRACTURED.",
    content: "See your doctor promptly. Raise the leg above your heart while sitting or lying down and place ice and a compressive wrap on the swollen area. Consider a soft, but compressive brace and crutches. Take an over-the-counter analgesic, such as ibuprofen to help relieve pain.",
  },
  "Is there pain on the bottom of your foot between the ball and the heel?": {
    heading: "You may have SPRAINED the ligament in the arch of the foot. Also see PLANTA FASCIITIS below.",
    content: "Use shoes with an arch support and take an over-the-counter anti-inflammatory medicine. See your doctor if the pain is severe or if you can’t walk on the foot.",
  },
  "Is the pain only in one toe and did it start after you hit, twisted, or jammed the toe?": {
    heading: "Your pain may be from TURF TOE (a sprained big toe), a PULLED LIGAMENT, or from a TOE FRACTURE.",
    content: "See your doctor. Applying ice or taping the sore toe to the toe next to the sore toe (with padding in between the toes) can help relieve the pain.",
  },
  "Do you have a fever and are your joints tender, sore, red, or swollen?": {
    heading: "RHEUMATOID ARTHRITIS may be the cause of the pain. A fever, along with a painful, swollen joint could be caused by an INFECTED JOINT. More than one affected, inflamed, or red joint could mean RHEUMATIC FEVER.",
    content: "See your doctor. Treatment for RHEUMATOID ARTHRITIS may include medicines, physical therapy, exercise, and in some cases, surgery.",
  },
  "Do you have a red, swollen big toe that hurts when anything touches it?": {
    heading: "You may have GOUT (inflammation caused by high uric acid level in the blood).",
    content: "See your doctor. During a GOUT attack or flare up, you should rest in bed. You can put a hot pad or an ice pack on your ankle to ease the pain. Avoid high fat meals or alcohol, since they are potential triggers of attacks or flare ups.",
  },
  "Do you have intense pain near your heel when you put weight on it?": {
    heading: "Your pain may be from a HEEL SPUR, a small bulge from the heel bone. More likely, the pain can be due to PLANTAR FASCIITIS or PLANTAR FASCIAL FIBROMATOSIS.",
    content: "See your doctor. Your doctor can suggest special stretching exercises to help relieve the pain. A soft insole or a firm insole with a hole under the spur may also help. For PLANTAR FASCIITIS, you can also use a golf ball to massage the sore area, as well as a plastic bottle filled with frozen water (ice massage).",
  },
  "Do you have a moist, white, or red area of peeling skin and itching between your toes, and/or scaling and itching skin on your foot, often in a “moccasin distribution”?": {
    heading: "These may be symptoms of a fungal infection called ATHLETE’S FOOT.",
    content: "Use an over-the-counter athlete’s foot spray or cream. Wash your feet thoroughly with soap and water twice a day. Be sure to dry your feet completely and consider frequent sock changes. If your symptoms aren’t better in 1 to 2 weeks, see your doctor. If the affected area is very red and tender, see your doctor sooner.",
  },
  "Have your toes or feet been exposed to very cold temperatures?": {
    heading: "FROSTBITE may damage your skin and tissues.",
    content: " See your doctor. Warm the feet by immersing them in lukewarm (not hot) water or by applying warm cloths to the affected area.",
  },


  // Hair Loss Problems
  "Is your hair falling out in small patches? Are these patches red, itchy, or oily?": {
    heading: "This type of hair loss can be caused by SEBORRHEA, LICHEN PLANUS, or RINGWORM.",
    content: "See your doctor.",
  },
  "Are you a man who has gradually lost hair in the front or on the top of your head and has relatives with similar hair loss?": {
    heading: "You may have classic MALE-PATTERN BALDNESS.",
    content: "Over-the-counter and prescription medicines are available to treat male-pattern baldness. See your doctor. He or she will determine which treatment is right for you.",
  },
  "Have you used any chemicals on your hair, or have you worn tight braids or cornrows recently?": {
    heading: "Your hair loss may be from FOLLICULAR DAMAGE (traction on the roots of the hair lead to hair loss).",
    content: "Tight braids, ponytails, or cornrows can break and damage hair. Secure hair with covered rubber bands and try not to style it too tightly. Discontinue the use of harsh chemicals on the hair and scalp, which can also result in hair loss.",
  },
  "Are you taking any new medicines, or are you being treated for cancer?": {
    heading: "Hair loss may be a side effect of MEDICINES, STEROIDS, or CHEMOTHERAPY (cancer treatment).",
    content: "Discuss these treatments with your doctor.",
  },
  "Have you been weak, tired, or anxious?": {
    heading: "You may have IRON or ZINC DEFICIENCY, THYROID DISEASE, or you are suffering from excess STRESS.",
    content: "See your doctor.",
  },
  "Are you a woman who is older than 50, or have you given birth within the last three months?": {
    heading: "HORMONE CHANGES may cause hair loss in women. If your hair loss has occurred gradually with advancing age, FOLLICULAR DEGENERATION (hair roots don’t work as well as previously) may be the cause.",
    content: "Post-pregnancy hormone changes usually reverse themselves without any treatment. While follicular degeneration cannot be reversed, gentle hair care may prolong the life of follicles.",
  },
  "Do you have a completely smooth patch where you lost hair with no broken or smaller hairs noted in the area?": {
    heading: "This is known as ALOPECIA AREATA.",
    content: "See your doctor. Your doctor can perform some tests, and could possibly treat you with steroid injections to the area.",
  },
  "Have you lost all of the hair all over your scalp? Or have you lost all of your hair all over your entire body? This would include eyebrows, genitals, armpits, face, etc.?": {
    heading: "This is known as ALOPECIA TOTALIS (scalp hair loss) or ALOPECIA UNIVERSALIS (whole body).",
    content: "This condition is thought to be related to your immune system attacking all of your hair cells. It is often a permanent condition, but hair can regrow, even many years later.",
  },

  // Arm Problems
  "Is the affected area deformed or swollen?": {
    heading: "You may have a FRACTURED bone.",
    content: " See your doctor right away. Apply ice packs to the affected area. Use a sling to help hold the arm still and reduce pain. Use an over-the-counter pain medicine, such as ibuprofen, to relieve pain and reduce swelling.",
  },
  "Does the pain get worse when you move your arm, hand, or wrist?": {
    heading: "If there is no fracture, the limb may be SPRAINED.",
    content: "Avoid activities that cause pain. Apply ice and don’t move your arm. Use an over-the-counter medicine such as ibuprofen to relieve pain and reduce swelling. See your doctor if the pain gets worse.",
  },
  "Does the pain get worse with repetitive movement (e.g., while working or playing a sport)?”": {
    heading: "If there is no fracture, the limb may be SPRAINED.",
    content: "Avoid activities that cause pain. Apply ice and don’t move your arm. Use an over-the-counter medicine such as ibuprofen to relieve pain and reduce swelling. See your doctor if the pain gets worse.",
  },
  "Is it painful to grip a doorknob, and does the pain start on the outside of your elbow and move down your arm to your wrist?": {
    heading: "You may have LATERAL EPICONDYLITIS (i.e., tennis elbow).",
    content: "Avoid activities that cause pain. Apply ice and a compressive bandage or sleeve. Use an over-the-counter medicine, such as ibuprofen, to relieve pain and reduce swelling. See your doctor if the pain gets worse or does not improve with rest.",
  },
  "Do you have numbness or pain in your fingers, hand, wrist, or arm, especially when you flex your wrist (i.e., bend your palm toward your forearm)?": {
    heading: "You may have CARPAL TUNNEL SYNDROME, a compression of the median nerve in the wrist and hand.",
    content: "Use anti-inflammatory medicine, such as ibuprofen, to reduce pain and swelling. A wrist splint worn at night may also ease pain and numbness. If your symptoms don’t improve, see your doctor.",
  },
  "Do you have a firm lump or swelling near your wrist or finger joints?": {
    heading: "You may have a GANGLION CYST, a common non-cancerous cyst.",
    content: "See your doctor if the cyst causes pain or begins to grow rapidly.",
  },
  "Are one or more joints swollen and tender? Do you have a fever?": {
    heading: "You may have RHEUMATOID ARTHRITIS, an inflammatory joint condition. You may also have GOUT, or an INFECTION (with fever) of the joint or bone.",
    content: "See your doctor right away. Use an anti-inflammatory medicine, such as ibuprofen, to relieve pain and reduce swelling.",
  },
  "Does your thumb hurt with gripping, typing, or writing with a pencil or pen?": {
    heading: "You may have CARPAL TUNNEL SYNDROME or de QUERVAIN’S TENOSYNOVITIS.",
    content: "For CARPAL TUNNEL SYNDROME, use an anti-inflammatory medicine, such as ibuprofen, to reduce pain and swelling. A wrist splint worn at night may also ease pain and numbness. If your symptoms don’t improve, see your doctor. For de QUERVAIN’S TENOSYNOVITIS, your doctor may prescribe, or you can purchase an over-the-counter splint that does not allow your thumb to move. See your doctor if the pain worsens or does not improve with rest.",
  },


  // headaches and other prblems 
  "Do you have a fever, cold symptoms, nausea, vomiting, or diarrhea?": {
    heading: "You may have the COLD or the FLU or GASTROENTERITIS (stomach flu).",
    content: "Get plenty of rest and drink plenty of water. Use over-the-counter medicine to relieve cold and flu symptoms and for diarrhea. Do not give cough or cold medicines to children under 5 years.",
  },
  "Do you have a severe headache, stiff neck, vomiting, and does normal light hurt your eyes, or do normal sounds hurt your ears?": {
    heading: "You may have MENINGITIS, a serious infection of the fluid around your brain and spinal cord, or INTRACRANIAL HEMORRHAGE (i.e., bleeding inside the brain).",
    content: " See your doctor or go to the emergency room right away.",
  },
  "Have you injured your head or been knocked out recently?": {
    heading: "You may have a CONCUSSION (also called MILD TRAUMATIC BRAIN INJURY), or a SUBDURAL HEMATOMA, a serious condition caused by blood pushing on your brain.",
    content: " See your doctor or go to the emergency room right away.",
  },
  "Do you have numbness, tingling, or weakness in the arms and legs, or do you have trouble speaking or understanding speech?": {
    heading: "You may be having a STROKE or a TRANSIENT ISCHEMIC ATTACK (i.e., mini-stroke).",
    content: " See your doctor or go to the emergency room right away.",
  },
  "Do you have pressure around your eyes, or do you have congestion with yellowish-green nasal discharge and a fever?": {
    heading: "You may have a sinus infection or SINUSITIS.",
    content: "Treat fever, headache, and sore throat with over-the-counter medicines, such as ibuprofen or acetaminophen. An over-the-counter decongestant and saline nasal spray may help relieve other symptoms. See your doctor if the pain becomes severe or your fever persists or symptoms last for more than 10 days.",
  },
  "Do you have mild to moderate pressure or tightening around your temples, and does the pain occur during times of stress or after you have been sitting in one position for a long time?": {
    heading: "You may have a TENSION HEADACHE.",
    content: "Use over-the-counter medicine, such as ibuprofen or acetaminophen, to relieve pain. Getting plenty of rest, taking a hot shower, and applying ice packs to painful areas may also help.",
  },
  "Do you have intense throbbing pain on one side of your head or temple, often with associated nausea or vomiting, and do see flashing lights or spots before the headache?": {
    heading: "You may suffer from MIGRAINE headaches.",
    content: "See your doctor. Your doctor can diagnose your problem and may prescribe prescription medicine for migraines. In the meantime, use over-the-counter medicine, such as ibuprofen or acetaminophen, to relieve pain. You can also rest in a dark room and apply ice packs and gentle pressure to painful areas.",
  },
  "Do your headaches occur after you read, watch TV, or use a computer?": {
    heading: "Your headaches may be due to VISION PROBLEMS.",
    content: "See an optometrist or ophthalmologist for an eye exam to see if you need glasses or contacts to correct your vision. Give yourself frequent eye breaks while reading or studying for extended periods of time.",
  },
  "Do you get headaches and feel shaky and weak if you miss a meal?": {
    heading: "Your headaches may be from HYPOGLYCEMIA (i.e., low blood sugar).",
    content: "See your doctor. You can also try eating 6 small meals a day rather than 3 large meals. This may regulate your blood sugar.",
  },
  "Are you trying to cut down on caffeine, alcohol, or some other drug?": {
    heading: "You may be suffering from withdrawal.",
    content: "Use over-the-counter medicine, such as ibuprofen or acetaminophen, to relieve pain and discomfort. Although painful, the symptoms are temporary and should fade after a few days. Don’t restart your habit.",
  },
  "Do you have headaches that occur daily for several days, and do you also have eye discharge and runny nose from the same side as the headache?": {
    heading: "You have CLUSTER HEADACHES.",
    content: "These are best treated with oxygen, but you can also use certain medicines, such as over-the-counter anti-inflammatory medicines (e.g., ibuprofen or naproxen). See your doctor.",
  },


  // hips problems
  "Did you fall or suddenly feel your hip give way?": {
    heading: "Your pain and deformity may be from a HIP FRACTURE.",
    content: " Go to the closest emergency room or call an ambulance.",
  },
  "Do the toes on your leg on the side of your injured hip seem to turn out, and does it hurt to straighten, lift, or stand on your leg?": {
    heading: "Your pain and deformity may be from a HIP FRACTURE.",
    content: " Go to the closest emergency room or call an ambulance.",
  },
  "Do you have stiffness, swelling, redness, or pain in any other joints?": {
    heading: "Your hip pain may be from ARTHRITIS.",
    content: "Try an anti-inflammatory medicine. If you don’t feel better, see your doctor.",
  },
  "Have you felt a “click” in your hip or occasional pain with activity?": {
    heading: "You may have a CONGENITAL HIP PROBLEM, a deformity of the hip joint that began before birth. You may also have TROCHANTERIC BURSITIS, an inflammation of the outside (lateral) part of your hip.",
    content: "See your doctor.",
  },
  "Do you have pain in the back of your hip that starts in your lower back and travels into your buttocks or into your leg?": {
    heading: "Your symptoms may be from SCIATICA, a pinched nerve. If the pain shoots down your leg near your knee or to your foot, this could also be from a RUPTURED or HERNIATED DISC in your low back.",
    content: "Heat, anti-inflammatory medicine, and rest may help. See your doctor if the pain continues or if it travels down your leg. Contact your doctor immediately if you develop difficulty controlling urination or bowel movements, have fever, have a history of cancer, or experience unintentional weight loss.",
  },
  "Is the person a child with pain in the knees, hips, or groin?": {
    heading: "This could be related to a number of disorders, including a SLIPPED CAPITAL FEMORAL EPIPHYSIS (often associated with teenagers who are overweight or obese).",
    content: "See your doctor.",
  },
  "Do you have pain in your hip that is also on the outside (lateral) part of your knee?": {
    heading: "You may have ILIOTIBIAL BAND SYNDROME. This is more common in runners and cyclists (straight-ahead activities).",
    content: "Stretching and applying ice can help. See your doctor if the pain and discomfort worsens or does not improve with rest.",
  },

  // knew prlblme
  "Did your knee pain or swelling begin after a fall, twisting injury, or after your knee was hit by an object or person?": {
    heading: "Your knee may be FRACTURED and/or you may have seriously TORN some LIGAMENTS (tissue connecting bones to each other) in the internal part of the knee.",
    content: " See your doctor or go to the emergency room right away.",
  },
  "Is your knee deformed?": {
    heading: "Your knee may be FRACTURED and/or you may have seriously TORN some LIGAMENTS (tissue connecting bones to each other) in the internal part of the knee.",
    content: " See your doctor or go to the emergency room right away.",
  },
  "Is your kneecap swollen, tender, and warm, and do you have pain with activity?": {
    heading: "If you fell hard on your kneecap/patella it may be FRACTURED. Otherwise, it may be bruised or you may have PREPATELLAR BURSITIS, an irritation of a small lubricating sac (called bursa) in front of the kneecap.",
    content: "See your doctor. Stretching and applying ice, as well as compression sleeves or wraps, may help with the discomfort and swelling.",
  },
  "Is your knee tender and swollen, and does the pain get worse after sitting for a long time or after using the stairs?": {
    heading: "Your symptoms may be from TORN CARTILAGE/MENISCUS, a TORN LIGAMENT (tissue connecting bones to each other), or CHONDROMALACIA PATELLAE, the softening of the ligament or cartilage underneath the kneecap.",
    content: "See your doctor. Rest and anti-inflammatory medicine, as well as a compression sleeve or wrap, may help relieve the pain. Physical therapy, stretching, and strengthening exercises can also help.",
  },
  "Do you have a sharp pain behind your knee and is it painful to extend (stretch out straight) your leg?": {
    heading: "You may have a TORN HAMSTRING MUSCLE.",
    content: "Apply ice to the area and use an anti-inflammatory medicine. You may also wrap your thigh with an elastic bandage or compression sleeve. Keep the injured leg elevated above the level of your heart. See your doctor if there’s excessive swelling or pain, or the pain does not improve with simple rest.",
  },
  "Is your knee swollen and/or red?": {
    heading: "You may have a TORN HAMSTRING MUSCLE.",
    content: "Apply ice to the area and use an anti-inflammatory medicine. You may also wrap your thigh with an elastic bandage or compression sleeve. Keep the injured leg elevated above the level of your heart. See your doctor if there’s excessive swelling or pain, or the pain does not improve with simple rest.",
  },
  "Do you have a fever along with swollen and/or red joints?": {
    heading: "You may have RHEUMATOID ARTHRITIS, but you may also have a more serious problem, such as RHEUMATIC FEVER or a SEPTICE JOINT INFECTION.",
    content: " See your doctor as soon as possible. Your doctor will be able to tell what’s causing your symptoms, and may refer you for or perform a joint aspiration (removing fluid from your knee joint).",
  },
  "Has your knee become tender over many months or years and does the pain get worse when the weather changes?": {
    heading: "Chronic pain and stiffness may be caused by OSTEOARTHRITIS, which can develop over time or can be the result of previous surgeries or trauma.",
    content: "Try an anti-inflammatory medicine. Applying heat to tender joints may also help relieve the pain. Regular physical activity can also improve symptoms. If your symptoms worsen or don’t improve, see your doctor.",
  },
  "Is the back of your knee swollen or tender?": {
    heading: "The swelling may be from a BAKER’S CYST, which often occurs following a small tear of your CARTILAGE/MENISCUS, or can result from ARTHRITIS.",
    content: "Try an anti-inflammatory medicine. You can also use a compressive wrap, bandage, or sleeve. Exercises for strengthening and stretching can also be helpful. If your symptoms worsen or don’t improve, see your doctor.",
  },

// menustrual cycle problem


  "Do you have abdominal or pelvic pain during sex, ovulation, or bowel movements?": {
    heading: "You may have a SEXUALLY TRANSMITTED INFECTION (STI), or a serious type of STI around your ovaries, fallopian tubes, and uterus, called PELVIC INFLAMMATORY DISEASE (PID).",
    content: " See your doctor right away. Any infection in the abdomen can be serious.",
  },
  "Are your periods heavier or are you bleeding longer than usual?": {
    heading: "The IUD may have caused this change in the pattern of your bleeding. The most frequent side effect is irregular bleeding (bleeding not related to your menstrual cycle), but usually an IUD will cause a significant decrease in the amount of bleeding and pain during your period.",
    content: "See your doctor.",
  },
  "Do you use an intrauterine device (IUD) for birth control (contraception)?": {
    heading: "The IUD may have caused this change in the pattern of your bleeding. The most frequent side effect is irregular bleeding (bleeding not related to your menstrual cycle), but usually an IUD will cause a significant decrease in the amount of bleeding and pain during your period.",
    content: "See your doctor.",
  },
  "Do you have a constant feeling that you need to urinate, or do you have pelvic pressure, constipation, or pain in your back or legs?": {
    heading: "Your symptoms may be from FIBROIDS, noncancerous tumors of the uterus.",
    content: "See your doctor. The fibroids can potentially be controlled with medications, but may need to be removed with surgery.",
  },
  "Do you have muscle aches, swelling, or stiffness in your joints, tightness or swelling in your throat, and/or weakness in your legs?": {
    heading: "You may have a problem with your THYROID GLAND, such as HASHIMOTO’S DISEASE (i.e., your body has created antibodies that attack your thyroid and lower its effectiveness).",
    content: "See your doctor.",
  },
  "Are your periods irregular, infrequent, or have they stopped?": {
    heading: "see a doctor and consult an adult member",
    content: "See your doctor.",
  },
  "Do you have breast tenderness, abdominal fullness, or nausea?": {
    heading: "You may have an OVARIAN CYST, or you may be PREGNANT.",
    content: "If you could be pregnant, do an at-home pregnancy test. If it’s positive, see your doctor for confirmation. If you don’t think you’re pregnant and symptoms continue, see your doctor.",
  },
  "Are you on birth control pills?": {
    heading: "Some women will miss a period while on BIRTH CONTROL PILLS. There is a small chance you could be PREGNANT.",
    content: "Wait to see if you have a period at the end of your next pack of pills (when you take your sugar pills, you should have your period). See your doctor if you have signs of pregnancy or you don’t have a period after the second month.",
  },
  "Are you 35 years old or older?": {
    heading: "Periods that stop after years of regularity may be caused by NORMAL or EARLY MENOPAUSE. Irregular periods may also be due to FIBROIDS, HORMONE PROBLEMS, or other medical conditions.",
    content: "See your doctor.",
  },
  "Have you felt sluggish, or have you gained or lost weight without trying?": {
    heading: "You may have a HORMONE PROBLEM, such as a THYROID GLAND problem. Periods may stop or become irregular if your weight falls dramatically, as can occur with ANOREXIA NERVOSA or BULIMIA.",
    content: "See your doctor.",
  },

  // nausea and vomiting problems
  "Do you have a fever along with nausea and vomiting?": {
    heading: "You may have HEPATITIS, a disease that causes liver inflammation and is most commonly caused by a virus.",
    content: "See your doctor right away. Hepatitis needs to be treated to avoid permanent liver damage.",
  },
  "Along with nausea and vomiting, do you also have dark urine and/or a yellow discoloration of your skin or the whites of your eyes, or are your stools turning white along with other cold and flu-like symptoms?": {
    heading: "You may have HEPATITIS, a disease that causes liver inflammation and is most commonly caused by a virus.",
    content: "See your doctor right away. Hepatitis needs to be treated to avoid permanent liver damage.",
  },
  "Do you have cold and flu symptoms along with nausea, vomiting and/or diarrhea?": {
    heading: "You may have viral GASTROENTERITIS (stomach flu).",
    content: "Drink plenty of fluids and get rest. Use an analgesic, such as acetaminophen to reduce fever. If your symptoms get worse or you don’t get any better after a few days, see your doctor. Contact your doctor if you have a high fever (greater than 101.5 degrees Fahrenheit) or your symptoms last for more than 10 days or if you are unable to tolerate liquids for more than 2 days.",
  },
  "Do you have a sharp pain that started in the middle of your abdomen by your belly button, but is now in the right lower quadrant, and have you lost your appetite?": {
    heading: "You may have APPENDICITIS, an inflammation or infection of the appendix, or a BOWEL OBSTRUCTION.",
    content: " See your doctor or go to the emergency room right away. An infected appendix could rupture within 24 hours if left untreated.",
  },
  "Do you have a headache or stiff neck, and do normal amounts of light hurt your eyes?": {
    heading: "You may have MENINGITIS, a serious infection of the membranes around the brain.",
    content: " See your doctor or go to the emergency room right away. Delayed treatment could result in serious injury or death.",
  },
  "Do you have pain in your right upper abdomen or do greasy foods make the pain worse?": {
    heading: "You may have GALLSTONES or CHOLECYSTITIS, an infection or inflammation of the gallbladder.",
    content: "See your doctor. Gallbladder and pancreas symptoms often come and go. You may still need medicine or surgery to take care of the problem. If the pain is intense or your fever is greater than 101.5 degrees Fahrenheit or persists for more than one day, see your doctor or go to the emergency room right away.",
  },
  "Do you have a burning pain in your abdomen between your breastbone and belly button? Does the pain often get better after eating?": {
    heading: "You may have a PEPTIC ULCER or GASTRITIS caused by a bacterial infection from HELICOBACTER PYLORI.",
    content: "See your doctor. Use an antacid to relieve pain and discomfort. You may need antibiotics to treat the infection.",
  },
  "Did your sickness occur shortly after eating food? Did someone else also get the same symptoms after eating the same food?": {
    heading: "You may have FOOD POISONING caused by a toxin or bacteria from contaminated food. This is likely if someone else who ate the same food also became ill.",
    content: "Drink plenty of fluids and get plenty of rest. Most episodes will clear up by themselves in 8 to 12 hours. If your symptoms are severe or you don’t get better, call your doctor.",
  },
  "Have you vomited blood and/or had black, tarry stools? Does your vomit look like coffee grounds?": {
    heading: "You may have a bleeding ULCER or another serious condition, such as CANCER.",
    content: " See your doctor or go to the emergency room right away.",
  },
  "Do you have a burning feeling in your lower chest, along with a sour or bitter taste in your throat and mouth, especially after eating?": {
    heading: "You may have HEARTBURN.",
    content: "Use an antacid to relieve pain and discomfort. If the pain or burning continue, or if you have symptoms most days of the week, call your doctor.",
  },
  "Are you taking any medicine, herbs, or vitamins?": {
    heading: "Medicine or other supplements could be causing the nausea and vomiting as a side effect or adverse event.",
    content: "See your doctor and tell him or her about any medicine or supplements you are taking.",
  },
  "Have you missed a period or could you be pregnant?": {
    heading: "You may be PREGNANT.",
    content: "Use an in-home pregnancy test, and if it is positive, confirm it with your doctor.",
  },
  "Do you have diabetes or are you at risk of having diabetes?": {
    heading: "You may have KETOACIDOSIS, usually caused by high blood sugar.",
    content: "Check your blood sugar if you have a glucometer and appropriate testing materials. See your doctor if your blood sugar is consistently and dramatically elevated (>300), if the symptoms are severe or last more than 24 hours. If you have not been diagnosed with diabetes and think you may be at risk, see your doctor.",
  },
  "Did you recently hit your head and now have a headache, blurred vision, or new numbness or tingling somewhere on your body?": {
    heading: "You may have a serious HEAD or TRAUMATIC BRAIN INJURY, which is also known as a CONCUSSION. You may also have a BLEED on or around your brain.",
    content: " See your doctor or go to the emergency room right away.",
  },

  // Add more disease-treatment mappings as needed
};

function App() {
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [associatedDiseases, setAssociatedDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSymptomChange = (symptom) => {
    setSelectedSymptom(symptom);
    setAssociatedDiseases(diseasesData[symptom]);
    setSelectedDisease("");
    setTreatment("");
  };

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(disease);
    setTreatment(treatmentData[disease]);
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} align="stretch">
      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Select Symptom:
          </Text>
          {symptoms.map((symptom) => (
            <Box
              key={symptom.id}
              border={selectedSymptom === symptom.name ? "1px solid blue" : "none"}
              borderRadius="md"
              padding="2"
              onClick={() => handleSymptomChange(symptom.name)}
              _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
              transition="background-color 0.3s ease"
              _active={{ backgroundColor: "blue.200" }}
            >
              <Text>{symptom.name}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Associated Diseases:
          </Text>
          {associatedDiseases.length > 0 ? (
            associatedDiseases.map((disease) => (
              <Box
                key={disease}
                border={selectedDisease === disease ? "1px solid blue" : "none"}
                borderRadius="md"
                padding="2"
                onClick={() => handleDiseaseClick(disease)}
                _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
                transition="background-color 0.3s ease"
                _active={{ backgroundColor: "blue.200" }}
              >
                <Text>{disease}</Text>
              </Box>
            ))
          ) : (
            <Text>No associated diseases</Text>
          )}
        </VStack>
      </Box>

      <Box width={{ base: "100%", md: "33%" }} padding="2">
        <VStack align="stretch">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Treatment:
          </Text>
          {treatment ? (
            <>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                DIAGNOSIS
              </Text>
              <Text fontSize="lg" fontWeight="" mb={2}>
                {treatment.heading}
              </Text>
              <Text fontSize="lg" fontWeight="BOLD" mb={2}>
                SELF CARE
                {/* {treatment.heading} */}
              </Text>

              <Text>
                {treatment.content}
              </Text>
            </>
          ) : (
            <Text>No treatment available</Text>
          )}
        </VStack>
      </Box>
    </Flex>
  );
}

export default App;
