"""Publish Google Scholar stats to the `google-scholar-stats` branch.

Outputs two files consumed by the site:
  results/gs_data.json           -> full author record (site reads `citedby`)
  results/gs_data_shieldsio.json -> shields.io endpoint payload
"""

import json
import os
from datetime import datetime, timezone

import jsonpickle
from scholarly import scholarly

scholar_id = os.environ["GOOGLE_SCHOLAR_ID"]

author = scholarly.search_author_id(scholar_id)
scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])

author["updated"] = datetime.now(timezone.utc).isoformat()
# Re-key publications by their stable Scholar id so the page can look one up.
author["publications"] = {p["author_pub_id"]: p for p in author["publications"]}

os.makedirs("results", exist_ok=True)

with open("results/gs_data.json", "w", encoding="utf-8") as f:
    json.dump(json.loads(jsonpickle.encode(author)), f, ensure_ascii=False)

with open("results/gs_data_shieldsio.json", "w", encoding="utf-8") as f:
    json.dump(
        {
            "schemaVersion": 1,
            "label": "citations",
            "message": str(author.get("citedby", 0)),
            "color": "9cf",
        },
        f,
        ensure_ascii=False,
    )

print(f"citedby={author.get('citedby')} publications={len(author['publications'])}")
