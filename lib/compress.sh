#/bin/sh
# Requires Closure Compiler Application
# https://developers.google.com/closure/compiler/docs/gettingstarted_app

# --compilation_level ADVANCED_OPTIMIZATIONS 

SCRIPTS=("turn" "turn.html4" "zoom" "scissor")
SCRIPTS_LEN=${#SCRIPTS[@]}
SCRIPTS_COMMENT="/* turn.js 4.1.0 | Copyright (c) 2012 Emmanuel Garcia | turnjs.com | turnjs.com/license.txt */"

echo -e "${SCRIPTS_COMMENT}\n" > comment.js

if [ ! -f /tmp/compiler.jar ];
then
	echo "Downloading Google Closure Compiler..."
	curl --silent -L http://closure-compiler.googlecode.com/files/compiler-latest.zip > /tmp/compiler-latest.zip
	unzip  -o /tmp/compiler-latest.zip -d /tmp
	rm /tmp/compiler-latest.zip
	chmod +x /tmp/compiler.jar
fi

	echo "Making Minimized files..."

for (( i=0; i<${SCRIPTS_LEN}; i++ ));
do
	java -jar "/tmp/compiler.jar" --js ${SCRIPTS[$i]}.js > ${SCRIPTS[$i]}.closure.js

	cat comment.js ${SCRIPTS[$i]}.closure.js  > ${SCRIPTS[$i]}.min.js 

	rm ${SCRIPTS[$i]}.closure.js

	m=$(ls -la ${SCRIPTS[$i]}.min.js | awk '{ print $5}')
	gzip -nfc --best ${SCRIPTS[$i]}.min.js > ${SCRIPTS[$i]}.min.js.gz
	g=$(ls -la ${SCRIPTS[$i]}.min.js.gz | awk '{ print $5}')
	echo " ${SCRIPTS[$i]}.js: $m bytes minified, $g bytes gzipped"

	rm ${SCRIPTS[$i]}.min.js.gz

	if [ "--test" == "$1" ]; then
		rm ${SCRIPTS[$i]}.min.js
	fi

done

rm comment.js