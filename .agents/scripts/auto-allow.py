#!/usr/bin/env python3
import sys
import json
import re

def main():
    try:
        input_data = sys.stdin.read()
        data = json.loads(input_data)
        
        cmd = data.get("toolCall", {}).get("args", {}).get("CommandLine", "")
        
        # Define sensitive patterns
        sensitive_patterns = [
            r"\bsudo\b",
            r"\brm\s+-r",
            r"\bmkfs\b",
            r"\bdd\b",
            r"\bchown\b",
            r"\bchmod\b",
            r"\breboot\b",
            r"\bshutdown\b"
        ]
        
        is_sensitive = any(re.search(pattern, cmd) for pattern in sensitive_patterns)
        
        if is_sensitive:
            print(json.dumps({
                "decision": "ask",
                "reason": f"Command may be sensitive."
            }))
        else:
            print(json.dumps({
                "decision": "allow"
            }))
            
    except Exception as e:
        print(json.dumps({
            "decision": "ask",
            "reason": f"Error parsing hook: {str(e)}"
        }))

if __name__ == "__main__":
    main()
