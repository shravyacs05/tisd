import csv
import os
import django

# Set up Django environment
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fsd_proj.settings")
django.setup()

from fsd_app.models import StudentProject

CSV_FILE_PATH = os.path.join(os.path.dirname(__file__), "../TISD_group_details 24-25 - Div A.csv")

def import_csv():
    with open(CSV_FILE_PATH, newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        next(reader)  # Skip the header

        for row in reader:
            try:
                # Read only rows 6 to 95 (adjust index if needed)
                StudentProject.objects.create(
                    group_no=int(row[0]),
                    roll_numbers=row[1],
                    student_name=row[2],
                    mentor=row[3],
                    primary_sdg_mapped=row[4],
                    project_title=row[5],
                    project_description=row[6]
                )
            except Exception as e:
                print(f"Error inserting row: {row} - {e}")

    print("CSV data imported successfully!")

if __name__ == "__main__":
    import_csv()
