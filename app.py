from flask import Flask, redirect, request

app = Flask(__name__)

# Sample JSON data containing the URL mappings
url_mappings = {
    "/main/chat.html": "/chat",
    "/main/search.html": "/search",
    "/main/game/text-game.html": "/game",
    "/products.html": "/products",
    # Add more mappings as needed
}

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def remove_html_extension(path):
    # Check if the requested URL has ".html" extension
    if path.endswith(".html"):
        # Remove the ".html" extension
        new_path = path[:-5]

        # Check if the new path is available in the JSON mappings
        if new_path in url_mappings:
            # Redirect to the URL without ".html"
            return redirect(url_mappings[new_path])

    # If no ".html" extension or no mapping found, return the requested page
    return f"Requested page: {path}"

if __name__ == "__main__":
    app.run()
